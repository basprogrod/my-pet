import './styles.scss'
import { ColorElementProps } from './IColorElement'

const ColorElement = ({
  link,
  type,
  isSelected,
  onClick,
}: ColorElementProps) => {
  const handleClick = () => onClick(type)

  return (
    <button
      className={`color-element ${isSelected ? 'active' : ''}`}
      onClick={handleClick}
    >
      <img src={link} alt="" />
    </button>
  )
}

export default ColorElement
