import { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../lib/prisma';
import createCampaignBody from '../schemas/createCampaignBody';
import createCampaignBodyToUpdate from '../schemas/createCampaignBodyToUpdate';

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
          tbl_ngo: {
            select: {
              id: true,
              name: true,
              description: true,
              email: true,
              cnpj: true,
            },
          },
          tbl_campaign_causes: {
            select: {
              tbl_causes: {
                select: {
                  id: true,
                  title: true,
                },
              },
            },
          },
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
        reply.status(400).send({ errors: ['Id não enviado!'] });
      }

      const camapaign = await prisma.campaign.findUnique({
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
          tbl_ngo: {
            select: {
              id: true,
              name: true,
              email: true,
              cnpj: true,
              description: true,
              photoURL: true,
              password: false,
            },
          },
          tbl_campaign_photos: {
            select: {
              photo_url: true,
            },
          },
          tbl_campaign_causes: {
            select: {
              tbl_causes: {
                select: {
                  id: true,
                  title: true,
                  description: true,
                },
              },
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

      if (!camapaign) {
        reply.status(400).send('Ainda não há campanhas registradas!');
      }

      reply.status(200)
        .send({ campaigns: camapaign });
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
        reply.status(400).send({ errors: ['No value for search!'] });
      }

      const response = await prisma.campaign.findMany({
        where: {
          title: {
            contains: search,
          },
        },
      });

      if (!response) {
        reply.status(400).send({ errors: [`No values for search ['${search}]`] });
      }

      reply.status(200).send({ message: `Values for ['${search}']`, payload: response });
 		} catch (e) {
      console.log(e);
      reply.status(500).send({ errrors: ['Não foi possivel concluir a requisição.'] });
    }
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    try {
      // @ts-ignore
      const { id }: string = request.params;

      if (!id) {
        reply.status(400).send({ errors: ['Id não enviado!'] });
        return;
      }

      const bodyToUpdate = createCampaignBodyToUpdate.parse(request.body);

      const updatedCampaign = await prisma.campaign.update({
        where: {
          id,
        },
        data: {
          title: bodyToUpdate.title,
          description: bodyToUpdate.description,
          begin_date: bodyToUpdate.begin_date,
          end_date: bodyToUpdate.end_date,
          home_office: bodyToUpdate.home_office,
          tbl_campaign_address: {
            update: {
              tbl_address: {
                update: {
                  postal_code: bodyToUpdate.address.postal_code,
                  number: bodyToUpdate.address.number,
                  complement: bodyToUpdate.address.complement,
                },
              },
            },
          },
          tbl_campaign_causes: {
            deleteMany: {
              id,
            },
            createMany: {
              data: bodyToUpdate.causes.map((cause) => ({ id_cause: cause.id })),
            },
          },
          // TODO
          // tbl_campaign_photos: {
          //   update: {
          //     where: {
          //       id: bodyToUpdate.photoURL?.map()
          //     }
          //   }
          // }
          how_to_contribute: bodyToUpdate.how_to_contribute,
          prerequisites: bodyToUpdate.prerequisites,
        },
      });

      if (!updatedCampaign) {
        reply.status(400).send({ errors: ['Não foi possivel atualizar a campanha!'] });
        return;
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
          tbl_campaign_photos: {
            createMany: {
              data: campaignBody.photoURL.map((photo_url) => ({ photo_url })),
            },
            // Criando a campanha com apenas uma foto! \\

            // create: {
            //   photo_url: campaignBody.photoURL,
            // },
          },
          tbl_campaign_causes: {
            createMany: {
              data: campaignBody.causes.map(({ id }) => ({ id_cause: id })),
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
}

export default new CampaignController();
