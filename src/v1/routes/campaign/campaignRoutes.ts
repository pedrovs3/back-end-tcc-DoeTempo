import { FastifyInstance } from 'fastify';
import campaignController from '../../controllers/CampaignController';

export async function campaignRoutes(fastify: FastifyInstance) {
  fastify.get('/', campaignController.index);
  fastify.get('/:id', campaignController.show);
  fastify.get('/search', campaignController.showByName);
  fastify.put('/:id', { onRequest: fastify.authenticate }, campaignController.update);
  fastify.post('/', { onRequest: fastify.authenticate }, campaignController.store);
  fastify.delete('/:id', { onRequest: fastify.authenticate }, campaignController.delete);
}
