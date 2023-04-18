import { FastifyInstance } from 'fastify';
import countController from '../controllers/Count.controller';

export async function countRoutes(fastify: FastifyInstance) {
  fastify.get('/', countController.index);
}
