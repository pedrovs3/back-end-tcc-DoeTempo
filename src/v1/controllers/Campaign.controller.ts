import { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../lib/prisma';
import { FindAllCampaignsUseCase } from '../domain/useCases/campaign/find.all.campaigns.use.case';
import { genericError } from '../errors/GenericError';
import { genericError500 } from '../errors/GenericError500';
import { FindByIdCampaignUseCase } from '../domain/useCases/campaign/find.by.id.campaign.use.case';
import {
  FindByNameCampaignUseCase,
} from '../domain/useCases/campaign/find.by.name.campaign.use.case';
import { UpdateCampaignUseCase } from '../domain/useCases/campaign/update.campaign.use.case';
import { CreateCampaignUseCase } from '../domain/useCases/campaign/create.campaign.use.case';
import { DeleteCampaignUseCase } from '../domain/useCases/campaign/delete.campaign.use.case';
import { unauthorizedError } from '../errors/UnauthorizedError';
import { DeactivateCampaigUseCase } from '../domain/useCases/campaign/deactivate.campaig.use.case';
import campaignRepository from '../domain/repositories/Campaign.repository';

class CampaignController {
  async index(request: FastifyRequest, reply: FastifyReply) {
    try {
      const campaigns = await new FindAllCampaignsUseCase().execute();

      if (typeof campaigns === 'string') {
        if (campaigns.includes('erro')) {
          return reply.status(500).send(new genericError500(campaigns));
        }
        return reply.status(400).send(new genericError(campaigns));
      }

      reply.status(200)
        .send({ campaigns });
    } catch (e) {
      console.log(e);
      reply.status(400)
        .send({ error: e });
    }
  }

  async show(request: FastifyRequest, reply: FastifyReply) {
    try {
      // @ts-ignore
      const { id }: string = request.params;

      if (!id) {
        reply.status(400).send(new genericError('Id não enviado!'));
      }

      const campaign = await new FindByIdCampaignUseCase().execute(id);

      if (typeof campaign === 'string') {
        if (campaign.includes('servidores')) {
          return reply.status(500).send(campaign);
        }
        return reply.status(400).send(new genericError(campaign));
      }

      reply.status(200)
        .send(campaign);
    } catch (e) {
      console.log(e);
      reply.status(400)
        .send({ errors: e });
    }
  }

  async showByName(request: FastifyRequest, reply: FastifyReply) {
    try {
      // @ts-ignore
      const { search } = request.query;

      if (!search) {
        reply.status(400).send(new genericError('Não foi enviado valor para a pesquisa!'));
      }

      const campaignByName = await new FindByNameCampaignUseCase().execute(search);

      if (typeof campaignByName === 'string') {
        if (campaignByName.includes('servidores')) {
          return reply.status(500).send(new genericError500(campaignByName));
        }
        return reply.status(400).send(new genericError(campaignByName));
      }

      reply.status(200).send({ message: `Valores para ['${search}']`, payload: campaignByName });
 		} catch (e) {
      console.log(e);
      reply.status(500).send({ errrors: ['Não foi possivel concluir a requisição.'] });
    }
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    try {
      // @ts-ignore
      const { id }: string = request.params;
      const decodedJwt = request.user;
      const { body } = request;

      if (!id) {
        reply.status(400).send(new genericError('Id não enviado!'));
        return;
      }

      const updatedCampaign = await new UpdateCampaignUseCase().execute(id, body);
      if (typeof updatedCampaign === 'string') {
        if (updatedCampaign.includes('servidores')) {
          return reply.status(500).send(new genericError500(updatedCampaign));
        }
        return reply.status(400).send(new genericError(updatedCampaign));
      }

      reply.status(200)
        .send({ updatedCampaign });
    } catch (e) {
      console.log(e);
      reply.status(400)
        .send({ errors: e });
    }
  }

  async store(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { body }: any = request;
      const decodedJwt = request.user;

      // @ts-ignore
      if (decodedJwt.type === 'USER') {
        return reply.status(401).send(new unauthorizedError('Apenas ongs podem criar campanhas'));
      }

      // @ts-ignore
      const campaignCreated = await new CreateCampaignUseCase().execute(body, decodedJwt.id);

      if (typeof campaignCreated === 'string') {
        if (campaignCreated.includes('servidores')) {
          return reply.status(500).send(new genericError500(campaignCreated));
        }
        return reply.status(400).send(new genericError(campaignCreated));
      }

      reply.status(201)
        .send({ payload: campaignCreated });
    } catch (e) {
      console.log(e);
      reply.status(400)
        .send({ error: e });
    }
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    try {
      // @ts-ignore
      const { id }: string = request.params;
      const decodedJWT = request.user;

      if (!id) {
        reply.status(400).send(new genericError('Id não enviado'));
      }

      // @ts-ignore
      const deletedUser = await new DeleteCampaignUseCase().execute(id, decodedJWT.id);

      if (deletedUser.includes('servidor')) {
        return reply.status(500).send(new genericError500(deletedUser));
      }
      if (deletedUser.includes('erro')) {
        return reply.status(400).send(new genericError(deletedUser));
      }

      reply.status(200)
        .send({ deleted: true });
    } catch (e) {
      console.log(e);
      reply.status(200)
        .send({ errors: e });
    }
  }

  async findByName(request: FastifyRequest, reply: FastifyReply) {
    try {
      // @ts-ignore
      const { searchString } : string = request.query;

      const result = await prisma.campaign.findMany({
        where: {
          title: {
            contains: searchString,
          },
        },
      });

      if (result.length < 1) {
        reply.status(404).send({ message: `Not found register's for "${searchString}"` });
        return;
      }

      reply.status(200).send({ message: `Results for '${searchString}'`, payload: result });
    } catch (e) {
      reply.status(500).send({ errors: [e] });
    }
  }

  async deactivate(request: FastifyRequest, reply: FastifyReply) {
    try {
      // @ts-ignore
      const { id } = request.params;

      if (!id) {
        return reply.status(400).send(new genericError('Id não enviado!'));
      }

      const deactivated = await new DeactivateCampaigUseCase().execute(id);

      if (deactivated.includes('servidor')) {
        return reply.status(500).send(new genericError500(deactivated));
      }
      if (deactivated.includes('erro')) {
        return reply.status(400).send(new genericError(deactivated));
      }

      reply.status(200).send(deactivated);
    } catch (e) {
      // @ts-ignore
      reply.status(400).send(new genericError(e.message));
    }
  }

  async checkUser(request: FastifyRequest, reply: FastifyReply) {
    try {
      // @ts-ignore
      const { id, idUser } = request.params;
      // @ts-ignore
      const { status }: string = request.query;

      if (status === 'Aguardando' || status === 'Reprovado' || status === 'Aprovado') {
        if (!id || !idUser || !status) {
          return reply.status(400).send(new genericError('Algum dado nao foi enviado!'));
        }

        const setStateUser = await campaignRepository.changeStatusUser(id, idUser, status);
        if (typeof setStateUser === 'string') {
          if (setStateUser.includes('servidor')) {
            reply.status(500).send(new genericError500(setStateUser));
          } else if (setStateUser.includes('Não foi possivel')) {
            reply.status(400).send(new genericError(setStateUser));
          } else {
            reply.status(200).send({ changed_status: true, new_status: status });
          }
        } else {
          reply.status(200).send({ changed_status: true, new_status: status });
        }
      } else {
        reply.status(400).send(new genericError('O status enviado está incorreto!'));
      }
    } catch (e) {
      // @ts-ignore
      reply.status(400).send(new genericError(e.message));
    }
  }

  async getParticipantsByOng(request:FastifyRequest, reply: FastifyReply) {
    try {
      const decodedJwt = request.user;

      // @ts-ignore
      const participants = await campaignRepository.participantsByOng(decodedJwt.id);

      if (typeof participants === 'string') {
        return reply.status(500).send(new genericError500(participants));
      }
      return reply.status(200).send({ volunteers: participants });
    } catch (e) {
      return reply.status(400).send(new genericError('Não foi possivel concluir a requisição!'));
    }
  }
}

export default new CampaignController();
