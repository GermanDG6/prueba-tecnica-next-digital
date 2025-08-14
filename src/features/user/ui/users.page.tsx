import { useEffect, useState } from 'react'
import type { User } from '../domain/user'
import { UserCard } from './components/user-card'
import { UserLocator } from './di/user-locator'

export const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([])

  const getUsersQry = UserLocator.getUsersQry()

  const getUsers = async () => {
    const users = await getUsersQry.execute()
    setUsers(users)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <h1>Next Digital Social Media</h1>
      <h3>All users</h3>

      {users.length > 0 ? (
        users.map((user) => {
          return (
            <a href={`/users/${user.id}`} key={user.id}>
              <UserCard user={user} />
            </a>
          )
        })
      ) : (
        <p>No users</p>
      )}
    </>
  )
}
