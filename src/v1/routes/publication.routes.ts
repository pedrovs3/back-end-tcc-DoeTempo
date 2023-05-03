import { FastifyInstance } from 'fastify';
import publicationController from '../controllers/Publication.controller';
import commentController from '../controllers/Comment.controller';

export async function publicationRoutes(fastify: FastifyInstance) {
  fastify.get('/', publicationController.index);
  fastify.get('/:id', publicationController.show);
  fastify.put('/:id', { preValidation: fastify.authenticate }, publicationController.update);
  fastify.post('/', { preValidation: fastify.authenticate }, publicationController.store);
  fastify.delete('/:id', { preValidation: fastify.authenticate }, publicationController.delete);

  // Comment's Routes
  fastify.get('/:id/comments/', { preValidation: fastify.authenticate }, commentController.index);
  fastify.post('/:id/comment', { preValidation: fastify.authenticate }, commentController.store);
}
