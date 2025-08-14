import { render, screen, waitFor } from '@testing-library/react'
import type { Mocked } from 'vitest'
import { mockReset } from 'vitest-mock-extended'
import type { UserRepository } from '../domain/user-repository'
import { UserPage } from '../ui/user.page'
import { UserLocator } from './di/user-locator'
describe('User page', () => {
  beforeEach(() => {
    mockReset(UserLocator.testRepository)
    const repoMock = UserLocator.testRepository as Mocked<UserRepository>

    repoMock.getUser.mockResolvedValue({
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
    })
  })
  it('should render properly', async () => {
    render(<UserPage />)
    waitFor(async () => {
      const title = await screen.findByText('User Information')
      expect(title).toBeInTheDocument()
    })
  })
  it('should render properly', async () => {
    render(<UserPage />)
    waitFor(async () => {
      const name = await screen.findByText('Name: Alberto')
      expect(name).toBeInTheDocument()
    })
  })
})
