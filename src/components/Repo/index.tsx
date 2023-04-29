import { RepoItem } from "../RepoItem"
import { IRepoItem } from "../RepoItem/types"
import { RepoContainer } from "./styles"
import { IRepo } from "./types"

const Repo = ({reposList}: IRepo) => {
  return (
    <RepoContainer>
      <p className="title">Repositórios mais recentes:</p>
      <div className="repo-list">
        {reposList?.map((repo: IRepoItem) => <RepoItem key={repo.id} name={repo.name} html_url={repo.html_url} description={repo.description} language={repo.language} stargazers_count={repo.stargazers_count} id={0} />)}
      </div>
    </RepoContainer>
  )
}

export { Repo }