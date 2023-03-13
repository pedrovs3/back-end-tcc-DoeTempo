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
    this.fastify.register(tokenRoutes, { prefix: '/token' });
    this.fastify.register(causesRoutes, { prefix: '/causes' });
    this.fastify.register(testsRoutes, { prefix: '/test' });
    this.fastify.register(campaignRoutes, { prefix: '/campaign' });
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

export default new App().fastify;
