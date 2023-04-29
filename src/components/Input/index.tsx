import { User } from "lucide-react"
import { InputWrapper } from "./styles"
import { IInput } from "./types"

const Input = ({label, id, placeholder, ...inputProps}: IInput) => {
  return (
    <InputWrapper>
      <label className="input-label" htmlFor={id} >
        {label}
      </label>
      <div className="input-container">
        <User size={24} />
        <input id={id} placeholder={placeholder} required {...inputProps} />
      </div>
    </InputWrapper>
  )
}

export { Input }
