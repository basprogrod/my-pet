import { ButtonProps } from "./IButton"
import './styles.scss'

const Button = ({
  onClick,
  text,
  icon,
  type = '',
}: ButtonProps) => {
  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {icon}
      {text && icon ? <span>{text}</span> : text}
    </button>
  )
}

export default Button