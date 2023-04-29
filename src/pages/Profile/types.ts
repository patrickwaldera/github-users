import { User } from '../../types/User'

export interface IProfile {
  user?: User | null
  setUser: (user: User | null) => void
}
