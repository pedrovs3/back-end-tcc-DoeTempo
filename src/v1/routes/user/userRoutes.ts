import { FastifyInstance } from 'fastify';
import usersController from '../../controllers/UsersController';

export async function userRoutes(fastify: FastifyInstance) {
  fastify.post('/', { onRequest: fastify.verifyBody }, usersController.store);
  fastify.post('/campaign/', usersController.loginInCampaign);
  fastify.get('/:id', { preValidation: fastify.authenticate }, usersController.show);
  fastify.put('/:id', { preValidation: fastify.authenticate }, usersController.update);
  fastify.delete('/:id', { preValidation: fastify.authenticate }, usersController.delete);
}

/* -- Controller functions
  index - show all users
  show - show one user
  store - Create user
  delete - Delete user
  update - Update user
*/
