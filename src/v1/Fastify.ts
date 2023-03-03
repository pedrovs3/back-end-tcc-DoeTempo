import Fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import fastifyJwt from '@fastify/jwt';
import * as dotenv from 'dotenv';
import fastifyMultipart from '@fastify/multipart';
import {
  appRoutes, genderRoutes, ngoRoutes, userRoutes,
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

    this.fastify.decorate('authenticate', async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        await request.jwtVerify();
      } catch (err) {
        reply.send(err);
      }
    });
  }

  private async middlewares() {
    await this.fastify.register(fastifyMultipart, { attachFieldsToBody: true });
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
    this.fastify.register(appRoutes);
    this.fastify.register(userRoutes, { prefix: '/user' });
    this.fastify.register(genderRoutes, { prefix: '/gender' });
    this.fastify.register(ngoRoutes, { prefix: '/ngo' });
  }
}

export default new App().fastify;
