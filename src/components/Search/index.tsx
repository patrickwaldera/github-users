import { SearchContainer } from "./styles"
import logo from '../../assets/Logo.svg'
import { Button } from "../Button"
import { Input } from "../Input"
import { useState } from "react"
import { ISearch } from "./types"
import userService from '../../services/user'

const Search = ({setUser}: ISearch) => {
  const [username, setUsername] = useState("")

  const handleSearch = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    const user = await userService.get(username)
    let repositories = await userService.getRepos(username)
    repositories = repositories.sort((a: any , b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    const userProfile = {
      name: user.name,
      image: user.avatar_url,
      username: user.login,
      createdAt: new Date(user.created_at),
      followers: user.followers,
      following: user.following,
      repos: user.public_repos,
      reposList: repositories.slice(0, 6)
    }
    setUser(userProfile)
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
            onChange={({target}) => setUsername(target.value)
          }
          />
          <Button type="submit" text="Pesquisar" />
        </form>
      </div>
    </SearchContainer>
  )
}

export { Search }