import { FastifyInstance } from 'fastify';
import homeController from '../../controllers/HomeController';

export function testRoutes(fastify: FastifyInstance) {
  fastify.get('/users', homeController.index);
}
