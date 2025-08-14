import { render, screen } from '@testing-library/react'
import type { Mocked } from 'vitest'
import { mockReset } from 'vitest-mock-extended'
import type { UserRepository } from '../domain/user-repository'
import { UserLocator } from './di/user-locator'
import { UsersPage } from './users.page'

describe('Users page', () => {
  beforeEach(() => {
    mockReset(UserLocator.testRepository)
  })
  it('should render properly', async () => {
    const repoMock = UserLocator.testRepository as Mocked<UserRepository>

    repoMock.getUsers.mockResolvedValue([
      {
        name: 'Alberto',
        id: 0,
        username: '',
        email: '',
        address: {
          street: '',
          city: '',
          zipcode: '',
        },
        phone: '',
        company: {
          name: '',
          catchPhrase: '',
        },
        website: '',
      },
    ])
    render(<UsersPage />)

    const title = await screen.findByText('Next Digital Social Media')

    expect(title).toBeInTheDocument()
    expect(UserLocator.testRepository.getUsers).toHaveBeenCalled()
  })

  it('should render cards with user information ', async () => {
    const repoMock = UserLocator.testRepository as Mocked<UserRepository>

    repoMock.getUsers.mockResolvedValue([
      {
        name: 'Alberto',
        id: 0,
        username: '',
        email: '',
        address: {
          street: '',
          city: '',
          zipcode: '',
        },
        phone: '',
        company: {
          name: '',
          catchPhrase: '',
        },
        website: '',
      },
    ])

    render(<UsersPage />)

    const userName = await screen.findAllByText('Name:', { exact: false })

    expect(userName[0]).toBeInTheDocument()
  })
  it('should render a notification if no have any user', async () => {
    const repoMock = UserLocator.testRepository as Mocked<UserRepository>

    repoMock.getUsers.mockResolvedValue([])

    render(<UsersPage />)

    const notification = await screen.findByText('No users')

    expect(notification).toBeInTheDocument()
  })
})
