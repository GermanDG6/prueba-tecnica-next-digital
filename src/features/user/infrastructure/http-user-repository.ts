import type { NumberId } from '../../../core/number-id/number-id'
import type { User } from '../domain/user'
import type { UserRepository } from '../domain/user-repository'

export class HttpUserRepository implements UserRepository {
  USERS_URL = 'https://jsonplaceholder.typicode.com/users/'
  USER_URL = (id: NumberId) =>
    `https://jsonplaceholder.typicode.com/users/${id}`

  async getUsers(): Promise<User[]> {
    const users = await fetch(this.USERS_URL)
    return users ? users.json() : []
  }

  async getUser(id: NumberId): Promise<User> {
    const user = await fetch(this.USER_URL(id))

    return user.json()
  }
}
