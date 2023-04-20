import { prisma } from '../../lib/prisma';

class CampaignRepository {
  async participantsByCampaign(idCampaign: string) {
    try {
      const campaignParticipants = await prisma.campaign.findUnique({
        where: {
          id: idCampaign,
        },
        select: {
          tbl_campaign_participants: {
            select: {
              id_user: true,
            },
          },
        },
      });

      if (!campaignParticipants) {
        throw new Error('Não foram encontrados participantes!');
      }

      return campaignParticipants;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new CampaignRepository();
