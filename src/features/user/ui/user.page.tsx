import { useEffect, useState, type FC } from 'react'
import { useParams } from 'react-router-dom'
import type { User } from '../domain/user'
import { UserCard } from './components/user-card'
import { UserLocator } from './di/user-locator'

export const UserPage: FC = () => {
  const { id } = useParams()

  const [user, setUser] = useState<User>()

  const getUserQry = UserLocator.getUserQry()

  const getUser = async () => {
    if (!id) return
    const user = await getUserQry.execute(Number(id))
    setUser(user)
  }
  useEffect(() => {
    getUser()
  }, [])
  console.log(user)
  return (
    <>
      <h2>User Information</h2>
      {user && <UserCard user={user} />}
    </>
  )
}
