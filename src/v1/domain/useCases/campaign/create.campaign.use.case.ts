import createCampaignBody from '../../../schemas/createCampaignBody';
import campaignRepository from '../../repositories/Campaign.repository';

export class CreateCampaignUseCase {
  async execute(body: any, idOng: string) {
    try {
      const campaignBody = createCampaignBody.parse(body);
      campaignBody.id_ngo = idOng;

      const campaignRepositoryResponse = await campaignRepository.create(campaignBody);

      return campaignRepositoryResponse;
    } catch (e) {
      console.log(e);
      return 'Não foi possivel concluir a requisição!';
    }
  }
}
