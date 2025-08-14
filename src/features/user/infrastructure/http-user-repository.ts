import type { HttpClient } from '../../../core/http-client/http-client'
import type { NumberId } from '../../../core/number-id/number-id'
import type { User } from '../domain/user'
import type { UserRepository } from '../domain/user-repository'

export class HttpUserRepository implements UserRepository {
  USERS_URL = 'https://jsonplaceholder.typicode.com/users/'
  USER_URL = (id: NumberId) =>
    `https://jsonplaceholder.typicode.com/users/${id}`

  constructor(private readonly httpClient: HttpClient) {}

  async getUsers(): Promise<User[]> {
    const users = await this.httpClient.get<User[]>(this.USERS_URL)
    return users
  }

  async getUser(id: NumberId): Promise<User> {
    const user = await this.httpClient.get<User>(this.USER_URL(id))

    return user
  }
}
