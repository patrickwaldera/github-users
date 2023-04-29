import { useState } from 'react'
import { Profile } from './pages/Profile'
import { Search } from './pages/Search'
import { Container } from './styles'
import { User } from './types/User'

function App() {
  const [user, setUser] = useState<User | null>(null)
  return (
    <Container>
      {!user && <Search setUser={setUser} />}
      {user && <Profile user={user} setUser={setUser} />}
    </Container>
  )
}

export default App
