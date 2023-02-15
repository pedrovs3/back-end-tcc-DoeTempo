import { FastifyInstance } from 'fastify';
import homeController from '../controllers/HomeController';

// Declaration of an api route
export async function appRoutes(fastify: FastifyInstance) {
  fastify.get('/', homeController.index);
}
