import { FastifyInstance } from 'fastify';
import publicationController from '../../controllers/PublicationController';

export async function publicationRoutes(fastify: FastifyInstance) {
  fastify.get('/', publicationController.index);
  fastify.get('/:id', publicationController.show);
  fastify.put('/:id', { preValidation: fastify.authenticate }, publicationController.update);
  fastify.post('/', { preValidation: fastify.authenticate }, publicationController.store);
  fastify.delete('/:id', { preValidation: fastify.authenticate }, publicationController.delete);
}
