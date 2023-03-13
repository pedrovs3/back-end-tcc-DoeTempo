import { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../lib/prisma';
import createCampaignBody from '../schemas/createCampaignBody';

class CampaignController {
  async index(request: FastifyRequest, reply: FastifyReply) {
    try {
      const campaigns = await prisma.campaign.findMany({
        select: {
          id: true,
          id_ngo: false,
          title: true,
          description: true,
          begin_date: true,
          end_date: true,
          home_office: true,
          prerequisites: true,
          how_to_contribute: true,
          tbl_ngo: true,
          tbl_campaign_address: {
            select: {
              tbl_address: true,
            },
          },
        },
      });

      if (campaigns.length < 1) {
        return { message: 'Não houve campanhas registradas!' };
      }

      reply.status(200)
        .send({ campaigns });
      return campaigns;
    } catch (e) {
      reply.status(400)
        .send({ error: e });
    }
  }

  async show(request: FastifyRequest, reply: FastifyReply) {
    try {
      // @ts-ignore
      const { id }: string = request.params;

      const campaign = await prisma.campaign.findUnique({
        where: { id },
        select: {
          id: true,
          title: true,
          description: true,
          how_to_contribute: true,
          prerequisites: true,
          home_office: true,
          begin_date: true,
          end_date: true,
          tbl_campaign_photos: {
            select: {
              photo_url: true,
            },
          },
          tbl_campaign_causes: {
            select: {
              tbl_causes: true,
            },
          },
          tbl_campaign_participants: {
            select: {
              tbl_user: true,
            },
          },
          tbl_campaign_address: {
            select: {
              tbl_address: true,
            },
          },
        },
      });

      reply.status(200)
        .send({ campaign });
    } catch (e) {
      console.log(e);
      reply.status(400)
        .send({ errors: e });
    }
  }

  async store(request: FastifyRequest, reply: FastifyReply) {
    try {
      const campaignBody = createCampaignBody.parse(request.body);

      const campaign = await prisma.campaign.create({
        data: {
          title: campaignBody.title,
          description: campaignBody.description || undefined,
          begin_date: campaignBody.begin_date,
          end_date: campaignBody.end_date,
          home_office: campaignBody.home_office,
          how_to_contribute: campaignBody.how_to_contribute,
          prerequisites: campaignBody.prerequisites,
          tbl_campaign_address: {
            create: {
              tbl_address: {
                create: {
                  number: campaignBody.address.number,
                  postal_code: campaignBody.address.postal_code,
                  complement: campaignBody.address.complement || undefined,
                },
              },
            },
          },
          id_ngo: campaignBody.id_ngo,
        },
      });

      reply.status(201)
        .send({ payload: campaign });
    } catch (e) {
      reply.status(400)
        .send({ error: e });
    }
  }
}

export default new CampaignController();
