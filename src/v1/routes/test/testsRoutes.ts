import { FastifyInstance } from 'fastify';
import homeController from '../../controllers/HomeController';

export async function testsRoutes(fastify: FastifyInstance) {
  fastify.get('/users', homeController.index);
}
