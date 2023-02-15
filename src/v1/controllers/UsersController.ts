import { z } from 'zod';
import { FastifyReply, FastifyRequest } from 'fastify';

class UsersController {
  async store(request: FastifyRequest, reply: FastifyReply) {
    const createUserBody = z.object({
      name: z.string(),
      email: z.string(),
      password: z.string(),
      cpf: z.string(),
      birthdate: z.coerce.date().min(),
      rg: z.string().optional(),
    });
  }
}

export default new UsersController();
