import { prisma } from '../../lib/prisma';

class CampaignRepository {
  async getAll() {
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
          ngo: {
            select: {
              id: true,
              name: true,
              description: true,
              email: true,
              cnpj: true,
              photo_url: true,
            },
          },
          campaign_causes: {
            select: {
              causes: {
                select: {
                  id: true,
                  title: true,
                },
              },
            },
          },
          campaign_address: {
            select: {
              address: true,
            },
          },
        },
      });

      if (campaigns.length < 1) {
        return 'Não houve campanhas registradas!';
      }

      return campaigns;
    } catch (e) {
      console.log(e);
      return ServerMessageError.MESSAGE;
    }
  }

  async participantsByCampaign(idCampaign: string) {
    try {
      const campaignParticipants = await prisma.campaign.findUnique({
        where: {
          id: idCampaign,
        },
        select: {
          campaign_participants: {
            select: {
              id_user: true,
            },
          },
        },
      });

      if (!campaignParticipants) {
        return 'Não foram encontrados participantes!';
      }

      return campaignParticipants;
    } catch (e) {
      console.log(e);
      return ServerMessageError.MESSAGE;
    }
  }

  async findById(id: string) {
    try {
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
          ngo: {
            select: {
              id: true,
              name: true,
              email: true,
              cnpj: true,
              description: true,
              photo_url: true,
              password: false,
            },
          },
          campaign_photos: {
            select: {
              photo_url: true,
            },
          },
          campaign_causes: {
            select: {
              causes: {
                select: {
                  id: true,
                  title: true,
                  description: true,
                },
              },
            },
          },
          campaign_participants: {
            select: {
              user: true,
            },
          },
          campaign_address: {
            select: {
              address: true,
            },
          },
        },
      });

      if (!campaign) {
        return 'Não foi possivel encontrar esta campanha!';
      }

      return campaign;
    } catch (e) {
      return ServerMessageError.MESSAGE;
    }
  }

  async findByName(searchString: string) {
    try {
      const response = await prisma.campaign.findMany({
        where: {
          title: {
            contains: searchString,
          },
        },
        select: {
          id: true,
          title: true,
          description: true,
          how_to_contribute: true,
          prerequisites: true,
          home_office: true,
          begin_date: true,
          end_date: true,
          ngo: {
            select: {
              id: true,
              name: true,
              email: true,
              cnpj: true,
              description: true,
              photo_url: true,
              password: false,
            },
          },
          campaign_photos: {
            select: {
              photo_url: true,
            },
          },
          campaign_causes: {
            select: {
              causes: {
                select: {
                  id: true,
                  title: true,
                  description: true,
                },
              },
            },
          },
          campaign_participants: {
            select: {
              user: true,
            },
          },
          campaign_address: {
            select: {
              address: true,
            },
          },
        },
      });
      return response;
    } catch (e) {
      return ServerMessageError.MESSAGE;
    }
  }

  async update(id: string, bodyToUpdate: any) {
    try {
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
          campaign_address: {
            update: {
              address: {
                update: {
                  postal_code: bodyToUpdate.address.postal_code,
                  number: bodyToUpdate.address.number,
                  complement: bodyToUpdate.address.complement,
                },
              },
            },
          },
          campaign_causes: {
            deleteMany: {
              id_campaign: id,
            },
            createMany: { // @ts-ignore
              data: bodyToUpdate.causes.map((cause) => ({ id_cause: cause.id })),
            },
          },
          campaign_photos: {
            deleteMany: {
              id_campaign: id,
            },
            createMany: { // @ts-ignore
              data: bodyToUpdate.photo_url.map((photo) => ({ photo_url: photo })),
            },
          },
          how_to_contribute: bodyToUpdate.how_to_contribute,
          prerequisites: bodyToUpdate.prerequisites,
        },
      });

      return updatedCampaign;
    } catch (e) {
      console.log(e);
      return ServerMessageError.MESSAGE;
    }
  }

  async create(campaignBody: any) {
    try {
      console.log(campaignBody.id_ngo);
      const campaign = await prisma.campaign.create({
        data: {
          title: campaignBody.title,
          description: campaignBody.description || undefined,
          begin_date: campaignBody.begin_date,
          end_date: campaignBody.end_date,
          home_office: campaignBody.home_office,
          how_to_contribute: campaignBody.how_to_contribute,
          prerequisites: campaignBody.prerequisites,
          campaign_address: {
            create: {
              address: {
                create: {
                  number: campaignBody.address.number,
                  postal_code: campaignBody.address.postal_code,
                  complement: campaignBody.address.complement || undefined,
                },
              },
            },
          },
          campaign_photos: {
            createMany: {
              data: campaignBody.photo_url.map((photo_url: any) => ({ photo_url })),
            },
          },
          campaign_causes: {
            createMany: {
              data: campaignBody.causes.map(({ id }: any) => ({ id_cause: id })),
            },
          },
          ngo: {
            connect: {
              id: campaignBody.id_ngo,
            },
          },
        },
      });

      if (!campaign.id) {
        return 'Não foi possivel criar a campanha! Verifique os dados e tente novamente!';
      }

      return campaign;
    } catch (e) {
      console.log(e);
      return ServerMessageError.MESSAGE;
    }
  }

  async delete(id: string) {
    try {
      const deleted = await prisma.campaign.delete({
        where: {
          id,
        },
      });

      if (!deleted.id) {
        return 'Houve um erro ao deletar a campanha!';
      }

      return `Campanha ${deleted.title} deletada com sucesso!`;
    } catch (e) {
      console.log(e);
      return ServerMessageError.MESSAGE;
    }
  }
}

export default new CampaignRepository();
