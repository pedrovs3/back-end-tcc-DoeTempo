import { prisma } from '../../lib/prisma';
import { Count } from '../models/Count';

class CountRepository {
  async getAll(): Promise<Count> {
    try {
      const users = await prisma.user.count();
      const ngos = await prisma.nGO.count();
      const campaigns = await prisma.campaign.count();

      return {
        users, ngos, campaigns, error: false,
      } as Count;
    } catch (e) {
      return {
        users: 0, campaigns: 0, ngos: 0, error: true,
      } as Count;
    }
  }
}

export default new CountRepository();
