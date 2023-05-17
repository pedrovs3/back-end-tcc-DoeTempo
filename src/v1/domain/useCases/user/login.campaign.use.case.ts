import { Query } from '../../models/Query';
import campaignRepository from '../../repositories/Campaign.repository';
import userRepository from '../../repositories/User.repository';

export class LoginCampaignUseCase {
  async execute(query: Query, idUser: string) {
    try {
      const campaignParticipants = await campaignRepository
        .participantsByCampaign(query.idCampaign);

      if (campaignParticipants) {
        // @ts-ignore
        campaignParticipants?.campaign_participants.forEach((user) => {
          if (user.id_user.includes(idUser)) {
            return 'Você já está inscrito nessa campanha!';
          }
        });
      }

      return await userRepository.loginInCampaign(query, idUser);
    } catch (e) {
      return 'Houve algum erro ao processar a solicitação';
    }
  }
}
