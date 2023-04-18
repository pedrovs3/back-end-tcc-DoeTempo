import { FastifyInstance } from 'fastify';
import ngoController from '../controllers/Ngo.controller';

export async function ngoRoutes(fastify: FastifyInstance) {
  fastify.get('/', ngoController.index);
  fastify.get('/:id', ngoController.show);
  fastify.post('/', ngoController.store);
  fastify.put('/:id', ngoController.update);
  fastify.delete('/:id', { preValidation: fastify.authenticate }, ngoController.delete);
}