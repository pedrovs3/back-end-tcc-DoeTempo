import { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../lib/prisma';
import checkPassword from '../utils/bcryptjs/checkPassword';
import fastify from '../index';

class TokenController {
  async store(request: FastifyRequest, reply: FastifyReply) {
    // @ts-ignore
    const { email, password } = request.body;

    if (!email || !password) {
      reply.status(401)
        .send({ error: ['Credenciais inválidas.'] });
    }

    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        tbl_type: {
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
        tbl_type: {
          select: {
            name: true,
          },
        },
        password: true,
        email: true,
      },
    });

    console.log(user);

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
          type: user.tbl_type.name,
        },
      });
  }
}

export default new TokenController();
