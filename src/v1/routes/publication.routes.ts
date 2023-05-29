import { FastifyInstance } from 'fastify';
import publicationController from '../controllers/Publication.controller';
import commentController from '../controllers/Comment.controller';
import likeController from '../controllers/Like.controller';

export async function publicationRoutes(fastify: FastifyInstance) {
  fastify.get('/', publicationController.index);
  fastify.get('/:id', publicationController.show);
  fastify.put('/:id', { preValidation: fastify.authenticate }, publicationController.update);
  fastify.post('/', { preValidation: fastify.authenticate }, publicationController.store);
  fastify.delete('/:id', { preValidation: fastify.authenticate }, publicationController.delete);

  // Comment's Routes
  fastify.get('/:id/comments', { preValidation: fastify.authenticate }, commentController.index);
  // fastify.put('/:id/comment/:idComment', { preValidation: fastify.authenticate }, commentController.update);
  fastify.post('/:id/comment', { preValidation: fastify.authenticate }, commentController.store);
  fastify.delete('/comment/:commentId', { preValidation: fastify.authenticate }, commentController.deleteComment);

  // Like's Routes
  fastify.post('/:id/like', { preValidation: fastify.authenticate }, likeController.store);
  fastify.delete('/:id/like', { preValidation: fastify.authenticate }, likeController.delete);
}
