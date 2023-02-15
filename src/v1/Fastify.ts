import Fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import { appRoutes, userRoutes } from './routes';

class App {
  declare fastify: FastifyInstance;

  constructor() {
    // Creating the Fastify Instance
    this.fastify = Fastify({
      logger: true,
    });

    // Setting global middlewares in this method.
    this.middlewares().then();

    // Setting the api routes.
    this.routes();
  }

  private async middlewares() {
    // Middleware of CORS
    await this.fastify.register(cors, {
      origin: true,
    });

    await this.fastify.register(helmet, { global: true });
  }

  private routes() {
    // Register routes of API
    this.fastify.register(appRoutes);
    this.fastify.register(userRoutes);
  }
}

export default new App().fastify;
