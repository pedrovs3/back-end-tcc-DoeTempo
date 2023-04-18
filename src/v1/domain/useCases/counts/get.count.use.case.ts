import countRepository from '../../repositories/Count.repository';
import { Count } from '../../models/Count';

export class GetCountUseCase {
  async execute() {
    try {
      const getCounts: Count = await countRepository.getAll();

      if (getCounts.error) {
        throw new Error('Houve um erro ao tentar encontrar os counts');
      }

      return getCounts as Count;
    } catch (e) {
      return e;
    }
  }
}
