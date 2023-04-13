import { FastifyInstance } from 'fastify';
import causesController from '../../controllers/CausesController';

export async function causesRoutes(fastify: FastifyInstance) {
  fastify.post('/', { preValidation: fastify.authenticate }, causesController.store);
  fastify.get('/', { preValidation: fastify.authenticate }, causesController.index);
}
