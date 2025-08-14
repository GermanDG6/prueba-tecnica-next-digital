import type { User } from './user'

export interface UserRepository {
  getUsers(): Promise<User[]>
}
