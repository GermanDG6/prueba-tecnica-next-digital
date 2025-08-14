import type { NumberId } from '../../../core/number-id/number-id'
import type { UserRepository } from '../domain/user-repository'

export class GetUserQuery {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: NumberId) {
    return this.userRepository.getUser(id)
  }
}
