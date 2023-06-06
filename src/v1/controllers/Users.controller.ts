import { FastifyReply, FastifyRequest } from 'fastify';
import 'dotenv/config';
import createError from '@fastify/error';
import { CreateUserUseCase } from '../domain/useCases/user/create.user.use.case';
import { LoginCampaignUseCase } from '../domain/useCases/user/login.campaign.use.case';
import { UpdateUserUseCase } from '../domain/useCases/user/update.user.use.case';
import { genericError500 } from '../errors/GenericError500';
import { genericError } from '../errors/GenericError';
import { DeleteUserUseCase } from '../domain/useCases/user/delete.user.use.case';
import { FindUserUseCase } from '../domain/useCases/user/find.user.use.case';
import { NotFoundError } from '../errors/NotFoundError';
import { prisma } from '../lib/prisma';
import CampaignRepository from '../domain/repositories/Campaign.repository';

const emptyQuery = createError('401', 'Está faltando dados para esta requisição!');

class UsersController {
  async store(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { body } = request;

      // @ts-ignore
      const user = await new CreateUserUseCase().execute(body);

      if (!user) {
        reply.status(400).send({ message: 'Tente novamente mais tarde!' });
        return;
      }

      if (typeof user === 'string') {
        if (user.includes('requisição')) {
          return reply.status(400).send(new genericError(user));
        } if (user.includes('servidor')) {
          return reply.status(500).send(new genericError500(user));
        }
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
      const { id } : string = request.params;

      if (!id) {
        return reply.status(400).send(new genericError('Id não enviado!'));
      }

      const deletedUser = await new DeleteUserUseCase().execute(id);

      if (deletedUser.includes('erro')) {
        reply.status(404)
          .send(new genericError(deletedUser));
      }
      if (deletedUser.includes('Não foi possivel deletar o usuário!') || deletedUser.includes('Usuário não cadastrado')) {
        reply.status(400).send(new genericError(deletedUser));
      }

      reply.status(200)
        .send({ message: deletedUser });
    } catch (e) {
      console.log(e);
      reply.status(400).send('Não foi possivel concluir a operação, confirme os dados e tente novamente!');
    }
  }

  async show(request: FastifyRequest, reply: FastifyReply) {
    try {
      // @ts-ignore
      const { id } : string = request.params;

      if (!id) {
        reply.status(400).send({ errors: ['Id is missing!'] });
      }

      const user = await new FindUserUseCase().execute(id);

      if (typeof user === 'string') {
        if (user.includes('servidor')) {
          return reply.status(500).send(new genericError500(user));
        } if (user.includes('encontrar')) {
          return reply.status(404).send(new NotFoundError(user));
        }
        return reply.status(400).send(new genericError(user));
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
      const decodedJwt = request.user;

      if (!id) {
        const missingIdError = createError('400', 'O id do usuário que deverá ser atualizado está faltando', 400);
        return reply.status(400).send(new missingIdError());
      }
      // @ts-ignore
      const updateUser = await new UpdateUserUseCase().execute(id, request.body, decodedJwt.id);

      if (typeof updateUser === 'string') {
        if (updateUser.includes('Você nao pode atualizar')) {
          return reply.status(400).send(new genericError(updateUser));
        }

        reply.status(500).send(new genericError500(updateUser));
      }

      reply.status(200)
        .send({ user: updateUser });
    } catch (e) {
      console.log(e);
      reply.status(500)
        .send(new genericError500('Não foi possivel atualizar o registro de usuário'));
    }
  }

  async loginInCampaign(request: FastifyRequest, reply: FastifyReply) {
    try {
      // @ts-ignores
      const { query }: {idCampaign: string } = request;
      const decodedJwt = request.user;

      if (query.idCampaign === '' || !query.idCampaign) {
        const errorTeste = createError('401', 'Não há dados necessários para concluir a requisição.', 401);
        return reply.status(401).send(new errorTeste());
      }

      // @ts-ignore
      const subscribedUser = await new LoginCampaignUseCase().execute(query, decodedJwt.id);

      if (typeof subscribedUser === 'string') {
        return reply.status(500).send(new genericError(subscribedUser));
      }

      reply.status(200).send({ message: 'Parabens! Agora você está inscrito na campanha.', data: subscribedUser });
    } catch (e) {
      reply.send(e);
    }
  }

  // async follow(request: FastifyRequest, reply: FastifyReply) {
  //   try {
  //     const { idUser } = request.query;
  //     const decodedJwt = request.user;
  //     const { id } = decodedJwt;
  //
  //     if (!idUser && !id) {
  //       return reply.status(400).send(new genericError('Não há dados necessarios.'));
  //     }
  //
  //     const followUser = await new UserFollowUseCase().execute('', '');
  //   } catch (e) {
  //     return reply.status(400).send(e);
  //   }
  // }

  async cancelSubscribeCampaign(request: FastifyRequest, reply: FastifyReply) {
    try {
      // @ts-ignore
      const { idCampaign } = request.params;
      // @ts-ignore
      const idUser = request.user.id;

      if (!idUser || !idCampaign) {
        reply.status(400).send(new genericError('Algum id está faltando.'));
      }

      const deleteSubscribe = await prisma.campaignParticipants.delete({
        where: {
          id_campaign_id_user: {
            id_user: idUser,
            id_campaign: idCampaign,
          },
        },
      });

      if (deleteSubscribe.id) {
        return reply.status(200).send();
      }

      reply.status(400).send();
    } catch (e) {
      reply.status(400).send({ message: 'Não foi possivel concluir a requisiçao', error: e });
    }
  }
}

export default new UsersController();
