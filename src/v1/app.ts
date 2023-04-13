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
  publicationRoutes,
  testsRoutes,
  tokenRoutes,
  userRoutes,
} from './routes';

dotenv.config();

class App {
  public fastify: FastifyInstance;

  // @ts-ignore
  private app_port: number = parseInt(process.env.PORT, 10) || 3333;

  constructor(appInit: { plugins: any }) {
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

  // eslint-disable-next-line no-mixed-spaces-and-tabs,no-tabs
 	public async decorate() {
    // @ts-ignore
    this.fastify.register(fastifyJwt, {
      secret: process.env.SECRET_JWT,
    });

    this.fastify.decorate('authenticate', async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        await request.jwtVerify();
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
}

export default App;