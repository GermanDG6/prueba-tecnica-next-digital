import '@testing-library/jest-dom'

import { mock } from 'vitest-mock-extended'
import type { UserRepository } from './src/features/user/domain/user-repository'
import { UserLocator } from './src/features/user/ui/di/user-locator'

UserLocator.testRepository = mock<UserRepository>()
