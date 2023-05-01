import campaignRepository from '../../repositories/Campaign.repository';

export class FindByIdCampaignUseCase {
  async execute(id: string) {
    try {
      return await campaignRepository.findById(id);
    } catch (e) {
      console.log(e);
      return 'Não foi possivel concluir a requisição!';
    }
  }
}
