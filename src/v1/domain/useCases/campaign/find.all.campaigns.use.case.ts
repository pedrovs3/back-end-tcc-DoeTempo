import campaignRepository from '../../repositories/Campaign.repository';

export class FindAllCampaignsUseCase {
  async execute() {
    const allCampaigns = await campaignRepository.getAll();

    return allCampaigns;
  }
}
