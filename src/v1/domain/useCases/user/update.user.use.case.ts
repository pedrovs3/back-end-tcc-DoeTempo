import { UpdateBodyUser } from '../../models/UpdateBodyUser';
import updateUserBody from '../../../schemas/updateUserBody';
import hashPassword from '../../../utils/hashPassword';
import userRepository from '../../repositories/User.repository';

export class UpdateUserUseCase {
  async execute(id: string, body: unknown, idJwt: string) {
    try {
      let updateUser;
      const bodyToUpdate: UpdateBodyUser = updateUserBody.parse(body);
      if (id !== idJwt) {
        return 'Você nao pode atualizar os dados de outro usuário!';
      }
      if (bodyToUpdate.password) {
        const newPassword = await hashPassword(bodyToUpdate.password);
        updateUser = await userRepository.update(id, bodyToUpdate, newPassword);
      } else {
        updateUser = await userRepository.update(id, bodyToUpdate);
      }

      return updateUser;
    } catch (e) {
      console.log(e);
      console.log(e);
      return 'Não foi possivel concluir a atualização de registro!';
    }
  }
}
