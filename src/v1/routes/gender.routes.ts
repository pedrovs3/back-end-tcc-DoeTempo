import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';

export async function genderRoutes(fastify: FastifyInstance) {
  fastify.get('/', async (request, reply) => {
    try {
      const genders = await prisma.gender.findMany({
        select: {
          name: true,
          id: true,
        },
      });

      reply.status(200)
        .send({ genders });
    } catch (e) {
      reply.status(400)
        .send(e);
    }
  });
}
