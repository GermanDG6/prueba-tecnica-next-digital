import { render, screen } from '@testing-library/react'
import { mockReset } from 'vitest-mock-extended'
import { UserLocator } from './di/user-locator'
import { UsersPage } from './users.page'

describe('Users page', () => {
  beforeEach(() => {
    mockReset(UserLocator.testRepository)
  })
  it('should render properly', async () => {
    UserLocator.testRepository.getUsers.mockResolvedValue([
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
      },
    ])
    render(<UsersPage />)

    const title = await screen.findByText('Users')

    expect(title).toBeInTheDocument()
    expect(UserLocator.testRepository.getUsers).toHaveBeenCalled()
  })

  it('should render cards with user information ', async () => {
    UserLocator.testRepository.getUsers.mockResolvedValue([
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
      },
    ])

    render(<UsersPage />)

    const userName = await screen.findAllByText('Name:', { exact: false })

    expect(userName[0]).toBeInTheDocument()
  })
  it('should render a notification if no have any user', async () => {
    UserLocator.testRepository.getUsers.mockResolvedValue([])

    render(<UsersPage />)

    const notification = await screen.findByText('No users')

    expect(notification).toBeInTheDocument()
  })
})
