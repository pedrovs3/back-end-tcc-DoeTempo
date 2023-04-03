import { FastifyInstance } from 'fastify';
import { prisma } from '../../lib/prisma';

export async function publicationRoutes(fastify: FastifyInstance) {
  fastify.post('/test', async (request, reply) => {
    try {
      const post = await prisma.post.findMany();
      reply.send(post);
    } catch (e) {
      console.error(e);
      reply.send(e);
    }
  });
}
