import { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../lib/prisma';
import createCampaignBody from '../schemas/createCampaignBody';
import createCampaignBodyToUpdate from '../schemas/createCampaignBodyToUpdate';
import { FindAllCampaignsUseCase } from '../domain/useCases/campaign/find.all.campaigns.use.case';
import { genericError } from '../errors/GenericError';
import { genericError500 } from '../errors/GenericError500';
import { FindByIdCampaignUseCase } from '../domain/useCases/campaign/find.by.id.campaign.use.case';
import { FindByNameCampaignUseCase } from '../domain/useCases/campaign/find.by.name.campaign.use.case';
import { UpdateCampaignUseCase } from '../domain/useCases/campaign/update.campaign.use.case';
import { CreateCampaignUseCase } from '../domain/useCases/campaign/create.campaign.use.case';

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
      const { body } = request.params;

      const campaignCreated = await new CreateCampaignUseCase().execute(body);

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

      if (!id) {
        reply.status(400).send({ errors: ['Id não enviado'] });
      }
      await prisma.campaign.delete({
        where: {
          id,
        },
      });
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
}

export default new CampaignController();
