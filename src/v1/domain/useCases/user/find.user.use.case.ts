import userRepository from '../../repositories/User.repository';

export class FindUserUseCase {
  async execute(id: string) {
    try {
      const user = await userRepository.findById(id);

      return user;
    } catch (error) {
      return 'Houve algum erro ao processar a requisição, tente enviar os dados novamente!';
    }
  }
}
