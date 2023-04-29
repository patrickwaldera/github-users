import { ButtonStyled } from './styles'
import { IButton } from './types'

const Button = ({ text, ...buttonProps }: IButton) => {
  return <ButtonStyled {...buttonProps}>{text}</ButtonStyled>
}

export { Button }
