import { FastifyReply, FastifyRequest } from 'fastify';
import 'dotenv/config';
import userModel from '../models/UserModel';
import createUserBody from '../schemas/userBodyZodSchema';
import fastify from '../Fastify';
import { prisma } from '../lib/prisma';
import hashPassword from '../utils/bcryptjs/hashPassword';
import checkPassword from '../utils/bcryptjs/checkPassword';

class UsersController {
  async store(request: FastifyRequest, reply: FastifyReply) {
    // @ts-ignore
    try {
      const userSchema = createUserBody.parse(request.body);
      const newPassword = await hashPassword(userSchema.password);
      console.log(newPassword);

      const user = await userModel.createUser(<userSchemaTypes>userSchema, newPassword);

      reply.send({ user });
    } catch (error) {
      console.log(error);

      reply.status(400).send({ error: 'Não foi possivel criar o usuário', errorDB: { error } });
    }
  }

  async signup(request: FastifyRequest, reply: FastifyReply) {
    try {
      // @ts-ignore
      const { email, password } = request.body;

      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (user) {
        const { id } = user;

        if (!(await checkPassword(password, user.password))) {
          reply.status(400).send({ error: ['Dados incorretos!'] });
        }

        const jwtToken = fastify.jwt.sign(
          { id, email },
          {
            expiresIn: '7d',
          },
        );
        reply.status(200).send({ jwtToken });
      } else {
        reply.status(400).send({ error: ['Usuário nao existente'] });
      }
    } catch (error) {
      reply.status(400).send({ error });
    }
  }
}

export default new UsersController();
