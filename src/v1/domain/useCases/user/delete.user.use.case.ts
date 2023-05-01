import { User } from '../../models/User';
import createUserBody from '../../../schemas/userBodyZodSchema';
import hashPassword from '../../../utils/hashPassword';
import userRepository from '../../repositories/User.repository';
import { prisma } from '../../../lib/prisma';
import UserRepository from '../../repositories/User.repository';

export class DeleteUserUseCase {
  async execute(id: string) {
    try {
      const deletedUser = await userRepository.delete(id);

      if (!deletedUser) {
        return 'Houve algum erro ao deletar o usuário';
      }

      return deletedUser;
    } catch (error) {
      return 'Houve algum erro ao processar a requisição, tente enviar os dados novamente!';
    }
  }
}
