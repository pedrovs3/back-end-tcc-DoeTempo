import campaignRepository from '../../repositories/Campaign.repository';

export class DeleteCampaignUseCase {
  async execute(id: string, idJWT: string) {
    try {
      const campaign = await campaignRepository.findById(id);
      if (typeof campaign === 'string') return campaign;

      const idCampaign = campaign.ngo.id;

      if (idCampaign !== idJWT) {
        return 'Você não pode excluir uma campanha sem ser o seu criador!';
      }

      return await campaignRepository.delete(id);
    } catch (e) {
      return 'Não foi possivel concluir a requisição!';
    }
  }
}
