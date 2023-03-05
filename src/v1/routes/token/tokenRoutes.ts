import { FastifyInstance } from 'fastify';
import tokenController from '../../controllers/TokenController';

export async function tokenRoutes(fastify :FastifyInstance) {
  fastify.post('/', tokenController.store);
}
