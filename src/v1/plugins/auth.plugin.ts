import {
  FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest,
} from 'fastify';
import fastifyPlugin from 'fastify-plugin';

const authPlugin = async (fastify: FastifyInstance, opts: FastifyPluginOptions) => {
  fastify.decorate('authenticate', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });
};
export default fastifyPlugin(authPlugin);
