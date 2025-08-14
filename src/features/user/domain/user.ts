import type { NumberId } from '../../../core/number-id/number-id'

export interface User {
  id: NumberId
  name: string
  username: string
  email: string
  address: Address
  phone: string
  company: Company
  website: string
}

interface Address {
  street: string
  city: string
  zipcode: string
}

interface Company {
  name: string
  catchPhrase: string
}
