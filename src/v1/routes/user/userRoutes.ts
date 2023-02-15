import { FastifyInstance } from 'fastify';

export function userRoutes(fastify: FastifyInstance) {
  fastify.post('/users', usersController.store());
}
