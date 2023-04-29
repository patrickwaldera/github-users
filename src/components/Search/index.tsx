import { SearchContainer } from "./styles"
import logo from '../../assets/Logo.svg'
import { Button } from "../Button"
import { Input } from "../Input"
import { useState } from "react"
import { ISearch } from "./types"
import userService from '../../services/user'
import { Loader } from 'lucide-react'

const Search = ({setUser}: ISearch) => {
  const [username, setUsername] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSearch = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    try{
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
    catch(error) {
      setErrorMessage("Usuário não encontrado!")
      setTimeout(() => {
        setErrorMessage("")
      }, 4000)
    }
    setLoading(false)
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
            errorMessage={errorMessage}
            value={username}
            onChange={({target}) => setUsername(target.value)
          }
          />
          {loading ? 
            <Loader size={32} className="loader" />
          :
            <Button type="submit" text="Pesquisar" />
          }
        </form>
      </div>
    </SearchContainer>
  )
}

export { Search }