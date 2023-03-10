import { FastifyReply, FastifyRequest } from 'fastify';
import 'dotenv/config';
import userModel from '../models/UserModel';
import hashPassword from '../utils/bcryptjs/hashPassword';
import createUserBody from '../schemas/userBodyZodSchema';
import { prisma } from '../lib/prisma';
import updateUserBody from '../schemas/updateUserBody';

class UsersController {
  async store(request: FastifyRequest, reply: FastifyReply) {
    try {
      const userSchema = createUserBody.parse(request.body);
      const newPassword = await hashPassword(userSchema.password);

      const user = await userModel.createUser(<userSchemaTypes>userSchema, newPassword);

      console.log(user);

      reply.status(201)
        .send({
          message: 'Usuário criado com sucesso!',
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

      if (!user) {
        reply.status(404)
          .send({ errors: ['Usuário não encontrado!'] });
      }

      reply.status(200)
        .send(user);
    } catch (e) {
      reply.send(e);
    }
  }

  async show(request: FastifyRequest, reply: FastifyReply) {
    try {
      // @ts-ignore
      const id: string = request.params;

      const user = await userModel.findUserById(id);

      if (!user) {
        reply.status(404)
          .send({ error: ['Usuário nao encontrado!'] });
      }

      reply.status(200)
        .send({ user });
    } catch (e) {
      reply.status(500)// @ts-ignore
        .send({ errors: [e.map((err) => err)] });
    }
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    try {
      // @ts-ignore
      const { id }: string = request.params;

      const bodyToUpdate = updateUserBody.parse(request.body);
      const newPassword = await hashPassword(bodyToUpdate.password);

      const updateUser = await prisma.user.update({
        where: {
          id,
        },
        data: {
          password: newPassword,
          name: bodyToUpdate.name,
          birthdate: bodyToUpdate.birthdate,
          email: bodyToUpdate.email,
          rg: bodyToUpdate.rg || undefined,
          userAddress: {
            update: {
              where: {
                // Migrate dev for unique id_user
                id_user: id,
              },
              data: {
                address: {
                  update: {
                    number: bodyToUpdate.address.number,
                    postal_code: bodyToUpdate.address.postal_code,
                    complement: bodyToUpdate.address.complement,
                  },
                },
              },
            },
          },
        },
      });

      reply.status(200)
        .send({ user: updateUser });
    } catch (e) {
      reply.status(400)
        .send({ error: ['Nao foi possivel atualizar o registro de usuário!'] });
    }
  }
}

export default new UsersController();
