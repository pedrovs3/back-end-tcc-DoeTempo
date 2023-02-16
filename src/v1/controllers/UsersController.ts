import { FastifyReply, FastifyRequest } from 'fastify';
import bcryptjs from 'bcryptjs';
import 'dotenv/config';
import userModel from '../models/UserModel';
import createUserBody from '../schemas/userBodyZodSchema';

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

      reply.status(400).send({ error: 'Não foi possivel criar o usuário' });
    }
  }
}

export default new UsersController();
