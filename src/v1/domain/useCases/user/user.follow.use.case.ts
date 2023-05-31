import userRepository from '../../repositories/User.repository';

export class UserFollowUseCase {
  async execute(idUserToFollow: string, id: string) {
    try {
      const followUser = await userRepository.follow(idUserToFollow, id);
    } catch (e) {

    }
  }
}
