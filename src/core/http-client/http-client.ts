export class HttpClient {
  constructor() {}

  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${endpoint}`)
    return response.json()
  }
}
