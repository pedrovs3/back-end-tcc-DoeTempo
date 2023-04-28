import { FastifyInstance } from 'fastify';

export default async function likesRoutes(fastify: FastifyInstance) {
  fastify.post('/:id', { preValidation: fastify.authenticate }, likesController.store);
}
