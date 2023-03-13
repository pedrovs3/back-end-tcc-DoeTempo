import { FastifyInstance } from 'fastify';
import causesController from '../../controllers/CausesController';

export async function causesRoutes(fastify: FastifyInstance) {
  fastify.post('/', { onRequest: fastify.authenticate }, causesController.store);
  fastify.get('/', { onRequest: fastify.authenticate }, causesController.index);
}
