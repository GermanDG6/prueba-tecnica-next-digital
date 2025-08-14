import { GetUserQuery } from '../../application/get-user.query'
import { GetUsersQuery } from '../../application/get-users.query'
import type { UserRepository } from '../../domain/user-repository'
import { HttpUserRepository } from '../../infrastructure/http-user-repository'

export class UserLocator {
  static testRepository: UserRepository
  private static readonly isTestMode = process.env.NODE_ENV === 'test'

  private static get repository(): UserRepository {
    if (UserLocator.isTestMode) {
      return UserLocator.testRepository
    }
    return new HttpUserRepository()
  }
  static getUsersQry() {
    return new GetUsersQuery(this.repository)
  }

  static getUserQry() {
    return new GetUserQuery(this.repository)
  }
}
