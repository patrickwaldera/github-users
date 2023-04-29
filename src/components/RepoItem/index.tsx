import { RepoItemContainer } from './styles'
import { BookMarkedIcon, Star } from 'lucide-react'
import { IRepoItem } from './types'
import languageColors from '../../utils/languageColors'

const RepoItem = ({
  name,
  html_url,
  description,
  language,
  stargazers_count,
}: IRepoItem) => {
  return (
    <RepoItemContainer href={html_url} target="_blank">
      <div className="repo-title">
        <BookMarkedIcon size={16} />
        <p>{name}</p>
      </div>
      <div className="repo-text">
        <p>{description}</p>
      </div>
      <div className="repo-footer">
        <div className="language">
          <div style={{ backgroundColor: languageColors[language] }}></div>
          <span>{language}</span>
        </div>
        <div className="stars">
          <Star size={14} />
          <span>{stargazers_count}</span>
        </div>
      </div>
    </RepoItemContainer>
  )
}

export { RepoItem }
