import { FastifyInstance } from 'fastify';
import usersController from '../controllers/Users.controller';

export async function userRoutes(fastify: FastifyInstance) {
  fastify.post('/', usersController.store);
  fastify.post('/campaign/', { preValidation: fastify.authenticate }, usersController.loginInCampaign);
  fastify.get('/:id', { preValidation: fastify.authenticate }, usersController.show);
  fastify.put('/:id', { preValidation: fastify.authenticate }, usersController.update);
  fastify.delete('/:id', { preValidation: fastify.authenticate }, usersController.delete);
}

/* -- Controller functions
  index - show all users
  show - show one cause
  store - Create cause
  delete - Delete cause
  update - Update cause
*/
