import { FastifyInstance } from 'fastify';
import publicationController from '../../controllers/PublicationController';

export async function publicationRoutes(fastify: FastifyInstance) {
  fastify.get('/', publicationController.index);
  fastify.get('/:id', publicationController.show);
	fastify.put('/:id', publicationController.update);
  fastify.post('/', publicationController.store);
}
