import { FastifyReply, FastifyRequest } from 'fastify';
import 'dotenv/config';
import userModel from '../models/UserModel';
import createUserBody from '../schemas/userBodyZodSchema';
import hashPassword from '../utils/bcryptjs/hashPassword';

class UsersController {
  async store(request: FastifyRequest, reply: FastifyReply) {
    try {
      const userSchema = createUserBody.parse(request.body);
      const newPassword = await hashPassword(userSchema.password);

      const user = await userModel.createUser(<userSchemaTypes>userSchema, newPassword);

      reply.status(201)
        .send({
          message: 'Created user with success!',
          payload: user,
        });
    } catch (error) {
      reply.status(400)
        .send({
          error: 'Não foi possivel criar o usuário',
          errorDB: { error },
        });
    }
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    try {
      // @ts-ignore
      const id: string = request.params;
      const user = await userModel.deleteUser(id);

      reply.send(user);
    } catch (e) {
      reply.send(e);
    }
  }
}

export default new UsersController();
