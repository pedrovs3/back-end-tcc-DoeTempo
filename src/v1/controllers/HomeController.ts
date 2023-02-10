import { FastifyReply, FastifyRequest } from 'fastify';
import {prisma} from "../lib/prisma";

class HomeController {
  async index(request: FastifyRequest, reply: FastifyReply) {
    reply.send({ message: 'Hello!' });
  }
}

export default new HomeController();
