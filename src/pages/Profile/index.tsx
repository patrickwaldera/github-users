import {
  Header,
  ProfileContainer,
  ProfileImgContainer,
  Stats,
  StatsItem,
  UserInfo,
} from './styles'
import { ArrowBigLeft, CalendarDays } from 'lucide-react'
import logo from '../../assets/Logo.svg'
import { Repo } from '../../components/Repo'
import { IProfile } from './types'
import { IRepoItem } from '../../components/RepoItem/types'

const Profile = ({ user, setUser }: IProfile) => {
  const reposList = user?.reposList.map((repo: any) => ({
    id: repo.id,
    name: repo.name,
    html_url: repo.html_url,
    description: repo.description,
    language: repo.language,
    stargazers_count: repo.stargazers_count,
  })) as IRepoItem[]

  return (
    <ProfileContainer>
      <Header>
        <a className="back-btn" onClick={() => setUser(null)}>
          <ArrowBigLeft />
          <p>Voltar</p>
        </a>
        <UserInfo>
          <ProfileImgContainer>
            <div className="profile-img">
              <img src={user?.image} alt="" />
            </div>
          </ProfileImgContainer>
          <div className="info">
            <h2>{user?.name}</h2>
            <a
              className="username-link"
              href={`https://github.com/${user?.username}`}
              target="_blank"
            >
              @{user?.username}
            </a>
            <p>
              <CalendarDays size={16} />
              Ingressou em{' '}
              {user?.createdAt.toLocaleString('pt-BR', {
                month: 'long',
                year: 'numeric',
              })}
            </p>
          </div>
        </UserInfo>
        <Stats>
          <StatsItem>
            <p>{user?.followers}</p>
            <span>Seguidores</span>
          </StatsItem>
          <StatsItem>
            <p>{user?.following}</p>
            <span>Seguindo</span>
          </StatsItem>
          <StatsItem>
            <p>{user?.repos}</p>
            <span>Repositórios</span>
          </StatsItem>
        </Stats>
      </Header>
      <Repo reposList={reposList} />
      <footer>
        <img className="footer-img" src={logo} alt="" />
      </footer>
    </ProfileContainer>
  )
}

export { Profile }
