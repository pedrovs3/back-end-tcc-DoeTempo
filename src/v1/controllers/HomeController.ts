import { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../lib/prisma';

class HomeController {
  async index(request: FastifyRequest, reply: FastifyReply) {
    try {
      const users = await prisma.user.findMany({
        select: {
          cpf: true,
          birthdate: true,
          email: true,
          id: true,
          name: true,
          password: true,
          phone: true,
          gender: {
            select: {
              abbreviation: true,
            },
          },
          address: {
            select: {
              postal_code: true,
              number: true,
            },
          },
        },
      });

      reply.status(200).send({ users });
    } catch (error) {
      console.log(error);
      reply.status(500).send({ error });
    }
    reply.send({ message: 'Hello!' });
  }

  async store() {

  }
}

export default new HomeController();
