import { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../lib/prisma';
import checkPassword from '../utils/bcryptjs/checkPassword';
import fastify from '../Fastify';

class TokenController {
  async store(request: FastifyRequest, reply: FastifyReply) {
    // @ts-ignore
    const {
      email,
      password,
    }: { email: string, password: string } = request.body;

    if (!email || !password) {
      reply.status(400)
        .send({ error: ['Credenciais inválidas.'] });
    }

    const user = await prisma.user.findUnique({ where: { email } }) || await prisma.nGO.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      reply.status(401)
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
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });
  }
}

export default new TokenController();
