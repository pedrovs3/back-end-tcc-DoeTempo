import { z } from 'zod';
import { FastifyReply, FastifyRequest } from 'fastify';
import bcryptjs from 'bcryptjs';
import 'dotenv/config';
import { prisma } from '../lib/prisma';

interface Error {
    statusCode: number,
    error: string,
    message: string
}

class UsersController {
  async store(request: FastifyRequest, reply: FastifyReply) {
    try {
      const createUserBody = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
        cpf: z.string(),
        birthdate: z.coerce.date(),
        address: z.object({
          postal_code: z.string(),
          number: z.string(),
          complement: z.string().optional().nullable(),
        }),
        gender: z.string(),
        phone: z.object({
          number: z.string(),
        }).array().optional(),
        rg: z.string().optional().nullable(),
      });

      const userSchema = createUserBody.parse(request.body);
      const newPassword = await bcryptjs.hash(userSchema.password, 8);

      const user = await prisma.user.create({
        data: {
          cpf: userSchema.cpf,
          rg: userSchema.rg,
          phone: {
            createMany: {
              data: {
                // Fix nullable possibility
                number: '', // userSchema.phone?.map((number) => number.number) || ''
              },
            },
          },
          address: {
            create: {
              postal_code: userSchema.address.postal_code,
              number: userSchema.address.number,
              complement: userSchema.address.complement || '',
            },
          },
          gender: {
            connect: {
              // Temporary
              id: userSchema.gender === 'F' ? '096df662-be26-4037-9bbf-8d54be5b0eeb' : 'teste',
            },
          },
          email: userSchema.email,
          password: newPassword,
          name: userSchema.name,
          birthdate: userSchema.birthdate,
        },
      });

      console.log(user);

      reply.send({ userSchema, user });
    } catch (error) {
      console.log(error);

      reply.status(400).send({ error: 'Não foi possivel criar o usuário' });
    }
  }
}

export default new UsersController();
