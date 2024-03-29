import Fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import fastifyJwt from '@fastify/jwt';
import * as dotenv from 'dotenv';
import {
  campaignRoutes,
  causesRoutes,
  countRoutes,
  genderRoutes,
  ngoRoutes,
  publicationRoutes,
  recoverRoutes,
  sourcesRoutes,
  testsRoutes,
  tokenRoutes,
  userRoutes,
} from './routes';

dotenv.config();

class App {
  public fastify: FastifyInstance;

  // @ts-ignore
  private app_port: number = process.env.PORT || 3333;

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

  public async decorate() {
    // @ts-ignore
    this.fastify.register(fastifyJwt, {
      secret: process.env.SECRET_JWT,
    });

    this.fastify.decorate('authenticate', async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        request.user = await request.jwtVerify();
      } catch (err) {
        reply.send(err);
      }
    });
  }

  public listen() {
    try {
      this.fastify.listen({
        port: this.app_port,
        host: '0.0.0.0',
      });
    } catch (e) {
      return 'Error on up server!';
    }
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
    this.fastify.register(userRoutes, { prefix: '/user' });
    this.fastify.register(genderRoutes, { prefix: '/gender' });
    this.fastify.register(ngoRoutes, { prefix: '/ngo' });
    this.fastify.register(tokenRoutes, { prefix: '/auth' });
    this.fastify.register(causesRoutes, { prefix: '/causes' });
    this.fastify.register(testsRoutes, { prefix: '/test' });
    this.fastify.register(campaignRoutes, { prefix: '/campaign' });
    this.fastify.register(publicationRoutes, { prefix: '/post' });
    this.fastify.register(countRoutes, { prefix: '/count' });
    this.fastify.register(sourcesRoutes, { prefix: '/sources' });
    this.fastify.register(recoverRoutes, { prefix: '/recover' });
    this.fastify.get('/', (request, reply) => {
      reply.status(200).send('Hello World');
    });
  }
}

export default App;
