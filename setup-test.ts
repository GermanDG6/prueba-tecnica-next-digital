import '@testing-library/jest-dom'
import type { Mocked } from 'vitest'
import { mock } from 'vitest-mock-extended'
import type { UserRepository } from './src/features/user/domain/user-repository'
import { UserLocator } from './src/features/user/ui/di/user-locator'

const repoMock: Mocked<UserRepository> = mock<UserRepository>()
UserLocator.testRepository = repoMock
