import type { User } from '../domain/user'
import type { UserRepository } from '../domain/user-repository'

export class HttpUserRepository implements UserRepository {
  USERS_URL = 'https://jsonplaceholder.typicode.com/users/'

  async getUsers(): Promise<User[]> {
    const users = await fetch(this.USERS_URL)
    return users ? users.json() : []
  }
}
