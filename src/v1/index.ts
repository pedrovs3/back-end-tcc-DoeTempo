import Fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import fastifyJwt from '@fastify/jwt';
import * as dotenv from 'dotenv';

import {
  campaignRoutes,
  causesRoutes,
  genderRoutes,
  ngoRoutes,
  testsRoutes,
  tokenRoutes,
  userRoutes,
  publicationRoutes,
} from './routes';

dotenv.config();

class App {
  declare fastify: FastifyInstance;

  constructor() {
    // Creating the Fastify Instance
    this.fastify = Fastify({
      logger: true,
    });

    // Setting global middlewares in this method.
    this.middlewares()
      .then();

    // Setting the api routes.
    this.routes();

    this.decorate();
  }

  private async middlewares() {
    // Middleware of CORS
    await this.fastify.register(cors, {
      origin: true,
    });
    await this.fastify.register(helmet, { global: true });
    // @ts-ignore
    await this.fastify.register(fastifyJwt, {
      secret: process.env.SECRET_JWT,
    });
  }

  private routes() {
    // Register routes of API
    this.fastify.register(userRoutes, { prefix: '/user' });
    this.fastify.register(genderRoutes, { prefix: '/gender' });
    this.fastify.register(ngoRoutes, { prefix: '/ngo' });
    this.fastify.register(tokenRoutes, { prefix: '/auth' });
    this.fastify.register(causesRoutes, { prefix: '/causes' });
    this.fastify.register(testsRoutes, { prefix: '/test' });
    this.fastify.register(campaignRoutes, { prefix: '/campaign' });
    this.fastify.register(publicationRoutes, { prefix: '/post' });
  }

  private decorate() {
    this.fastify.decorate('authenticate', async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        await request.jwtVerify();
      } catch (err) {
        reply.send(err);
      }
    });
  }
}

const { fastify: index } = new App();

const port = process.env.PORT || 3333;

const run = async () => {
  try {
    // @ts-ignore
    await index.listen({
      port,
      host: '0.0.0.0',
    });
  } catch (e) {
    process.exit(1);
  }
};

run();

export default new App().fastify;
