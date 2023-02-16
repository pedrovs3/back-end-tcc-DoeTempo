import { FastifyReply, FastifyRequest } from 'fastify';
import bcryptjs from 'bcryptjs';
import 'dotenv/config';
import userModel from '../models/UserModel';
import createUserBody from '../schemas/userBodyZodSchema';
import fastify from '../Fastify';
import { prisma } from '../lib/prisma';

class UsersController {
  async store(request: FastifyRequest, reply: FastifyReply) {
    // @ts-ignore
    try {
      const userSchema = createUserBody.parse(request.body);
      const newPassword = await bcryptjs.hash(userSchema.password, 8);

      const user = await userModel.createUser(<userSchemaTypes>userSchema, newPassword);

      reply.send({ userSchema, user });
    } catch (error) {
      console.log(error);

      reply.status(400).send({ error: 'Não foi possivel criar o usuário', errorDB: { error } });
    }
  }

  async signup(request: FastifyRequest, reply: FastifyReply) {
    try {
      // @ts-ignore
      const { email, name, cpf } = request.body;

      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (user) {
        const jwtToken = fastify.jwt.sign(
          { email, name, cpf },
        );

        reply.status(200).send({ jwtToken });
      } else {
        throw new Error();
      }
    } catch (error) {
      reply.status(400).send({ error });
    }
  }
}

export default new UsersController();
