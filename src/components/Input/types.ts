export interface IInput extends React.ComponentPropsWithoutRef<'input'> {
  label: string
  id: string
  placeholder: string
  errorMessage: string
}
