import { FastifyInstance } from 'fastify';
import homeController from '../../controllers/HomeController';

export function defaultRoutes(fastify: FastifyInstance) {
  fastify.get('users/', homeController.index);
}
