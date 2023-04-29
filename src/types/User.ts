export interface User {
  name: string
  image: string
  username: string
  createdAt: Date
  followers: number
  following: number
  repos: number
  reposList: Array<object>
}
