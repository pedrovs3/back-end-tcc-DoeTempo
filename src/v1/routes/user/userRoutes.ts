import { FastifyInstance } from 'fastify';
import usersController from '../../controllers/UsersController';

export async function userRoutes(fastify: FastifyInstance) {
  fastify.get('/test', (request, reply) => {
    reply.send('testee');
  });
  fastify.post('/users', usersController.store);
}
