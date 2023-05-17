import { FastifyInstance } from 'fastify';
import sourcesController from '../controllers/Sources.controller';

export async function sourcesRoutes(fastify: FastifyInstance) {
  fastify.get('/', sourcesController.index);
}
