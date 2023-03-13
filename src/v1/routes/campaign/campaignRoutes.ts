import { FastifyInstance } from 'fastify';
import campaignController from '../../controllers/CampaignController';

export async function campaignRoutes(fastify: FastifyInstance) {
  fastify.get('/', campaignController.index);
  fastify.get('/:id', campaignController.show);
  fastify.post('/', { onRequest: fastify.authenticate }, campaignController.store);
}
