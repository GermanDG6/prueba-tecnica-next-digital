import { mock } from 'vitest-mock-extended'
import { GetUsersQuery } from '../../application/get-users.query'
import type { UserRepository } from '../../domain/user-repository'
import { HttpUserRepository } from '../../infrastructure/http-user-repository'

export class UserLocator {
  static testRepository = mock<UserRepository>()
  private static readonly isTestMode = process.env.NODE_ENV === 'test'

  private static repository = UserLocator.isTestMode
    ? this.testRepository
    : new HttpUserRepository()

  static getUsersQry() {
    return new GetUsersQuery(this.repository)
  }
}
