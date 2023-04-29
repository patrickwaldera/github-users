import { useState } from "react"
import { Search } from "./components/Search"
import { Container } from "./styles"

function App() {
  const [user, setUser] = useState("patrick")
  return (
    <Container>
      {!user && <Search />}
      {user && <></>}
    </Container>
  )
}

export default App
