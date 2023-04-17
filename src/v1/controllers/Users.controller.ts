import { FastifyReply, FastifyRequest } from 'fastify';
import 'dotenv/config';
import userModel from '../domain/models/UserModel';
import hashPassword from '../utils/hashPassword';
import { prisma } from '../lib/prisma';
import updateUserBody from '../schemas/updateUserBody';
import { CreateUserUseCase } from '../domain/useCases/user/create.user.use.case';

class UsersController {
  async store(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { body } = request;

      // @ts-ignore
      const user = await new CreateUserUseCase().execute(body);
      console.log(user);

      if (!user) {
        console.log('Não foi possivel criar o usuário');
        reply.status(400).send({ message: 'Tente novamente mais tarde!' });
        return;
      }

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

      if (!id) {
        reply.status(400).send({ errors: ['Id is missing!'] });
      }

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

      if (!id) {
        reply.status(400).send({ errors: ['Id is missing!'] });
      }

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
          photoURL: bodyToUpdate.photoURL || undefined,
          userAddress: {
            update: {
              address: {
                update: {
                  number: bodyToUpdate.address.number,
                  postal_code: bodyToUpdate.address.postal_code,
                  complement: bodyToUpdate.address.complement,
                },
              },
            },
          },
          tbl_user_phone: {
            update: {
              where: {
                id_user: id,
              },
              data: {
                tbl_phone: {
                  update: { // @ts-ignore
                    number: bodyToUpdate.phone[0].number,
                  },
                },
              },
            },
          },
        },
      });

      if (!updateUser) {
        reply.status(500).send({ errors: ['Não foi possivel atualizar o registro do usuário.'] });
      }

      reply.status(200)
        .send({ user: updateUser });
    } catch (e) {
      console.log(e);
      reply.status(500)
        .send({ error: ['Nao foi possivel atualizar o registro de usuário!'] });
    }
  }

  async loginInCampaign(request: FastifyRequest, reply: FastifyReply) {
    try {
      // @ts-ignore
      const { query }: {idUser: string, idCampaign: string} = request;

      if (!query) {
        reply.status(400).send({ errors: ['Um ou mais argumentos estão faltando!'] });
      }

      const subscribedUser = await prisma.campaignParticipants.create({
        data: {
          tbl_user: {
            connect: {
              id: query.idUser,
            },
          },
          tbl_campaign: {
            connect: {
              id: query.idCampaign,
            },
          },
        },
      });

      if (!subscribedUser) {
        reply.status(500).send({ errors: ['Não foi possivel registrar o usuário nesta campanha!'] });
      }

      reply.send({ message: 'Parabens! Agora você está inscrito na campanha.', data: subscribedUser });
    } catch (e) {
      reply.send(e);
    }
  }
}

export default new UsersController();
