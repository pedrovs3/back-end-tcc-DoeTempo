import { FastifyInstance } from 'fastify';
import commentController from '../controllers/Comment.controller';

export async function commentRoutes(fastify: FastifyInstance) {
  // Index for publication
  fastify.get('/:id', { preValidation: fastify.authenticate }, commentController.index);
  // fastify.post('/', { preValidation: fastify.authenticate }, commentController.store);
}
