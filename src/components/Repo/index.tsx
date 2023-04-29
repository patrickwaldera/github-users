import { RepoItem } from "../RepoItem"
import { IRepoItem } from "../RepoItem/types"
import { RepoContainer } from "./styles"
import { IRepo } from "./types"
import empty from '../../assets/empty.svg'

const Repo = ({reposList}: IRepo) => {
  return (
    <RepoContainer>
      {reposList.length > 0 ?
        <>
          <p className="title">Repositórios mais recentes:</p>
          <div className="repo-list">
            {reposList?.map((repo: IRepoItem) => <RepoItem key={repo.id} name={repo.name} html_url={repo.html_url} description={repo.description} language={repo.language} stargazers_count={repo.stargazers_count} id={0} />)}
          </div>
        </>
      :
        <div className="empty">
          <img src={empty} alt="" />
          Este usuário não possui repositórios públicos.
        </div>
      }
    </RepoContainer>
  )
}

export { Repo }