import { FastifyInstance } from 'fastify';
import campaignController from '../controllers/Campaign.controller';

export async function campaignRoutes(fastify: FastifyInstance) {
  fastify.get('/', campaignController.index);
  fastify.get('/:id', campaignController.show);
  fastify.get('/search', campaignController.showByName);
  fastify.put('/:id', { preValidation: fastify.authenticate }, campaignController.update);
  fastify.post('/', { preValidation: fastify.authenticate }, campaignController.store);
  fastify.put('/deactivate/:id', { preValidation: fastify.authenticate }, campaignController.deactivate);
  fastify.delete('/:id', { preValidation: fastify.authenticate }, campaignController.delete);
}
