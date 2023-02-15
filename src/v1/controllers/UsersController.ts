import { z } from 'zod';
import { FastifyReply, FastifyRequest } from 'fastify';

class UsersController {
  async store(request: FastifyRequest, reply: FastifyReply) {
    const createUserBody = z.object({});
  }
}

export default new UsersController();
