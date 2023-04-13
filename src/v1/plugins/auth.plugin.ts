import {
  FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest,
} from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import fastifyJwt from '@fastify/jwt';

const authPlugin = async (fastify: FastifyInstance, opts: FastifyPluginOptions) => {
  // @ts-ignore
  fastify.register(fastifyJwt, {
    secret: process.env.SECRET_JWT,
  });

  fastify.decorate('authenticate', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });
};
export default fastifyPlugin(authPlugin);
