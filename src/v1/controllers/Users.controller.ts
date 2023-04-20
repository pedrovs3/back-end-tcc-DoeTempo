import { FastifyReply, FastifyRequest } from 'fastify';
import 'dotenv/config';
import createError from '@fastify/error';
import userModel from '../domain/models/UserModel';
import { CreateUserUseCase } from '../domain/useCases/user/create.user.use.case';
import { LoginCampaignUseCase } from '../domain/useCases/user/login.campaign.use.case';
import { UpdateUserUseCase } from '../domain/useCases/user/update.user.use.case';
import { genericError500 } from '../errors/GenericError500';

const emptyQuery = createError('401', 'Está faltando dados para esta requisição!');

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
        const missingIdError = createError('400', 'O id do usuário que deverá ser atualizado está faltando', 400);
        reply.status(400).send(new missingIdError());
        return new missingIdError();
      }

      const updateUser = await new UpdateUserUseCase().execute(id, request.body);

      if (typeof updateUser === 'string') {
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
      const { query }: { idUser: string, idCampaign: string } = request;

      if (query.idUser === '' || query.idCampaign === '' || !query.idUser || !query.idCampaign) {
        const errorTeste = createError('401', 'Não há dados necessários para concluir a requisição.', 401);
        return new errorTeste();
      }

      const subscribedUser = await new LoginCampaignUseCase().execute(query);

      if (typeof subscribedUser === 'string') {
        const errorMessage = createError('400', subscribedUser, 400);
        return reply.status(500).send(new errorMessage());
      }

      reply.status(200).send({ message: 'Parabens! Agora você está inscrito na campanha.', data: subscribedUser });
    } catch (e) {
      reply.send(e);
    }
  }
}

export default new UsersController();
