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
      <p>Phone: {user.phone}</p>
      <p>Email: {user.email}</p>
      <p>Company: {user.company.name}</p>
    </div>
  )
}
