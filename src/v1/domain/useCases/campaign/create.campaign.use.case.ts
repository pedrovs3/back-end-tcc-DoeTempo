import createCampaignBody from '../../../schemas/createCampaignBody';
import campaignRepository from '../../repositories/Campaign.repository';

export class CreateCampaignUseCase {
  async execute(body: any) {
    try {
      const campaignBody = createCampaignBody.parse(body);

      const campaignRepositoryResponse = await campaignRepository.create(campaignBody);

      return campaignRepositoryResponse;
    } catch (e) {
      return 'Não foi possivel concluir a requisição!';
    }
  }
}
