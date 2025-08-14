import type { FC } from 'react'
import type { User } from '../../domain/user'
import './user-card.css'

interface Props {
  user: User
}

export const UserCard: FC<Props> = (props) => {
  const { user } = props

  return (
    <div className="user-card">
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
    </div>
  )
}
