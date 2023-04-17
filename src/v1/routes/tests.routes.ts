import { FastifyInstance } from 'fastify';
import homeController from '../controllers/Home.controller';

export async function testsRoutes(fastify: FastifyInstance) {
  fastify.get('/users', homeController.index);
}
