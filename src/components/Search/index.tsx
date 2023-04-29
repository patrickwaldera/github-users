import { SearchContainer } from "./styles"
import logo from '../../assets/Logo.svg'
import { Button } from "../Button"
import { Input } from "../Input"
import { useState } from "react"

const Search = () => {
  const [username, setUsername] = useState("")

  const handleSearch = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("enviado")
  }

  return (
    <SearchContainer>
      <div className="logo-img">
        <img src={logo} alt="" />
      </div>
      <div className="form-wrapper">
        <form onSubmit={handleSearch}>
          <Input 
            label="Digite aqui o username:"
            id="username"
            placeholder="octocat"
            value={username}
            onChange={({target}) => setUsername(target.value)}
          />
          <Button type="submit" text="Pesquisar" />
        </form>
      </div>
    </SearchContainer>
  )
}

export { Search }