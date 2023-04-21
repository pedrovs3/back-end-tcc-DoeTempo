import { UpdateBodyUser } from '../../models/UpdateBodyUser';
import updateUserBody from '../../../schemas/updateUserBody';
import hashPassword from '../../../utils/hashPassword';
import userRepository from '../../repositories/User.repository';

export class UpdateUserUseCase {
  async execute(id: string, body: unknown, idJwt: string) {
    try {
      const bodyToUpdate: UpdateBodyUser = updateUserBody.parse(body);
      const newPassword = await hashPassword(bodyToUpdate.password);

      if (id !== idJwt) {
        return 'Você nao pode atualizar os dados de outro usuário!';
      }

      const updateUser = await userRepository.update(id, bodyToUpdate, newPassword);

      return updateUser;
    } catch (e) {
      return 'Não foi possivel concluir a atualização de registro!';
    }
  }
}
