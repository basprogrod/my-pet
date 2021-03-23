import { ButtonProps } from './IButton'
import './styles.scss'

const Button = ({ onClick, text, icon, type = 'default' }: ButtonProps) => {
  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {icon && <i className={icon} />}
      {text && icon ? <span>{text}</span> : text}
    </button>
  )
}

export default Button
