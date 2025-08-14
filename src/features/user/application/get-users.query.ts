import type { UserRepository } from '../domain/user-repository'

export class GetUsersQuery {
  constructor(private readonly repository: UserRepository) {}

  execute() {
    return this.repository.getUsers()
  }
}
