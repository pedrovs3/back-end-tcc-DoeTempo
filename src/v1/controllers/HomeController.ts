import { FastifyReply, FastifyRequest } from 'fastify';

class HomeController {
  async index(request: FastifyRequest, reply: FastifyReply) {
    reply.send({ message: 'Hello!' });
  }
}

export default new HomeController();
