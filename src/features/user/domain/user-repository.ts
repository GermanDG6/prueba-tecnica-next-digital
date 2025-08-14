import type { NumberId } from '../../../core/number-id/number-id'
import type { User } from './user'

export interface UserRepository {
  getUsers(): Promise<User[]>
  getUser(id: NumberId): Promise<User>
}
