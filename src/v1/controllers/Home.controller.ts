import { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../lib/prisma';

class HomeController {
  async index(request: FastifyRequest, reply: FastifyReply) {
    try {
      // Only for development
      const users = await prisma.user.findMany({
        select: {
          id: true,
          cpf: true,
          birthdate: true,
          email: true,
          photo_url: true,
          name: true,
          password: true,
          user_phone: {
            select: {
              phone: {
                select: {
                  number: true,
                },
              },
              user: false,
              id_user: false,
              id_phone: false,
            },
          },
          gender: {
            select: {
              abbreviation: true,
            },
          },
        },
      });

      reply.status(200)
        .send({ users });
    } catch (error) {
      reply.status(500)
        .send({ error });
    }
    reply.send({ message: 'Hello!' });
  }
}

export default new HomeController();
