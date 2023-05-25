import { User } from '../../models/User';
import createUserBody from '../../../schemas/userBodyZodSchema';
import hashPassword from '../../../utils/hashPassword';
import userRepository from '../../repositories/User.repository';

export class CreateUserUseCase {
  async execute(user: User) {
    try {
      const userSchema = createUserBody.parse(user);
      const newPassword = await hashPassword(userSchema.password);

      const userCreated = await userRepository.createUser(<userSchemaTypes>userSchema, newPassword);
      if (typeof userCreated === 'string') {
        return userCreated;
      }
      // @ts-ignore
      return userCreated as User;
    } catch (error) {
      console.log(error);
      return 'Não foi possivel concluir a requisição! tente novamente.';
    }
  }
}
