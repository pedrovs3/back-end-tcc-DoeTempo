import createCampaignBodyToUpdate from '../../../schemas/createCampaignBodyToUpdate';
import campaignRepository from '../../repositories/Campaign.repository';

export class UpdateCampaignUseCase {
  async execute(id: string, body: unknown) {
    try {
      const bodyToUpdate = createCampaignBodyToUpdate.parse(body);
      const updatedCampaign = await campaignRepository.update(id, bodyToUpdate);

      if (!updatedCampaign) {
        return 'Houve um erro ao atualizar a campanha! Confira os dados e tente novamente.';
      }

      return updatedCampaign;
    } catch (e) {
      console.log(e);
      return 'Não foi possivel concluir a requisição!';
    }
  }
}
