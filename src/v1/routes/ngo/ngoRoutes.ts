import { FastifyInstance } from 'fastify';
import ngoController from '../../controllers/ngoController';

export async function ngoRoutes(fastify: FastifyInstance) {
  fastify.get('/', ngoController.index);
  fastify.post('/', ngoController.store);
}
