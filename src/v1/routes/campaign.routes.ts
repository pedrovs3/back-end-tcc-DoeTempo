import { FastifyInstance } from 'fastify';
import campaignController from '../controllers/Campaign.controller';

export async function campaignRoutes(fastify: FastifyInstance) {
  // getAll
  fastify.get('/', campaignController.index);
  // getOne
  fastify.get('/:id', campaignController.show);
  // getParticipantsByOng
  fastify.get('/participants/:idOng', { preValidation: fastify.authenticate }, campaignController.getParticipantsByOng);
  fastify.put('/:id/user/:idUser', { preValidation: fastify.authenticate }, campaignController.checkUser);
  fastify.get('/search', campaignController.showByName);
  fastify.put('/:id', { preValidation: fastify.authenticate }, campaignController.update);
  fastify.post('/', { preValidation: fastify.authenticate }, campaignController.store);
  fastify.put('/deactivate/:id', { preValidation: fastify.authenticate }, campaignController.deactivate);
  fastify.delete('/:id', { preValidation: fastify.authenticate }, campaignController.delete);
}
