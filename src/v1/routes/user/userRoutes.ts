import { FastifyInstance } from 'fastify';
import usersController from '../../controllers/UsersController';

export async function userRoutes(fastify: FastifyInstance) {
  fastify.get('/test', { onRequest: fastify.authenticate }, (request, reply) => {
    reply.send('test');
  });
  fastify.post('/', usersController.store);
  fastify.post('/signup', usersController.signup);
  fastify.delete('/:id', usersController.delete);
}
