import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import admin from 'firebase-admin';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { prisma } from '../lib/prisma';
import checkPassword from '../utils/checkPassword';
import { firebaseConfig } from '../config/firebase';

export async function tokenRoutes(fastify :FastifyInstance) {
  fastify.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    // @ts-ignore
    const { email, password } = request.body;

    if (!email || !password) {
      reply.status(401)
        .send({ error: ['Credenciais inválidas.'] });
    }

    // Update campaigns in login
    await prisma.campaign.updateMany({
      where: {
        end_date: {
          lt: new Date(),
        },
      },
      data: {
        is_active: false,
      },
    });

    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        type: {
          select: {
            name: true,
          },
        },
        password: true,
        email: true,
      },
    }) || await prisma.nGO.findFirst({
      where: {
        email,
      },
      select: {
        id: true,
        name: true,
        type: {
          select: {
            name: true,
          },
        },
        password: true,
        email: true,
      },
    });

    const type = user?.type.name;

    if (!user) {
      reply.status(400)
        .send({ errors: ['Usuário não encontrado.'] });
      return;
    }

    if (!(await checkPassword(password, user.password))) {
      reply.status(401)
        .send({ error: ['Dados incorretos!'] });
    }
    const { id } = user;

    const token = fastify.jwt.sign(
      {
        id,
        email,
        type,
      },
      {
        expiresIn: process.env.TOKEN_EXPIRATION,
      },
    );

    reply.status(201)
      .send({
        token,
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
          type: user.type.name,
        },
      });
  });
}
