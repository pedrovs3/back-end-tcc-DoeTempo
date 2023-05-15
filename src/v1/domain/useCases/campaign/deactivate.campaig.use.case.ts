import campaignRepository from '../../repositories/Campaign.repository';

export class DeactivateCampaigUseCase {
  async execute(id: string) {
    try {
      const deactivateCampaign = await campaignRepository.deactivate(id);

      return deactivateCampaign;
    } catch (e) {
      return 'Não foi possivel concluir a requisição, Tente novamente mais tarde';
    }
  }
}
