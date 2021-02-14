
import { SizeElementProps } from './ISizeElement'
import './styles.scss'

const SizeElement = ({
  type,
  isSelected,
  isExist,
  onClick,
}: SizeElementProps) => {

  const handleClick = () => onClick(type)
  
  return (
    <button 
      className={`size ${isSelected ? 'active' : ''} ${isExist ? '' : 'inactive'}`}
      onClick={handleClick}>{type}
    </button>
  )
}

export default SizeElement