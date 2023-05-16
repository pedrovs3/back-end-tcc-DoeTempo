import { FastifyInstance } from 'fastify';

export function sourcesRoutes(fastify: FastifyInstance) {
  fastify.get('/', sourcesController.index);
}
