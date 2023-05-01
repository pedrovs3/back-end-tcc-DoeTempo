import campaignRepository from '../../repositories/Campaign.repository';

export class FindByNameCampaignUseCase {
  async execute(search: string) {
    try {
      const campaign = await campaignRepository.findByName(search);

      if (!campaign) {
        return `Não foram encontrados valores para: '${search}'`;
      }

      if (Array.isArray(campaign)) {
        if (campaign.length < 1) {
          return `Não foram encontrados valores para: '${search}'`;
        }
      }

      return campaign;
    } catch (e) {
      return 'Não foi possivel concluir a requisição!';
    }
  }
}
