import { FastifyInstance } from 'fastify';
import { UpdateBodyUser } from '../../models/UpdateBodyUser';
import updateUserBody from '../../../schemas/updateUserBody';
import hashPassword from '../../../utils/hashPassword';
import userRepository from '../../repositories/User.repository';

export class UpdateUserUseCase {
  async execute(id: string, body: unknown, fastify: FastifyInstance) {
    try {
      const bodyToUpdate: UpdateBodyUser = updateUserBody.parse(body);
      const newPassword = await hashPassword(bodyToUpdate.password);

      const updateUser = await userRepository.update(id, bodyToUpdate, newPassword);

      const jwt = fastify.jwt.decode(id);

      console.log(jwt);

      return updateUser;
    } catch (e) {
      return 'Não foi possivel concluir a atualização de registro!';
    }
  }
}
