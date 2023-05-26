import { prisma } from '../../../lib/prisma';
import userRepository from '../../repositories/User.repository';

class UserFollowUseCase {
  async execute(idUserToFollow: string, id: string) {
		try {
			const followUser = await userRepository.follow(idUserToFollow, id);
		} catch (e) {

		}
  }
}
