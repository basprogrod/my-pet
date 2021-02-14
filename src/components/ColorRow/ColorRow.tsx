import ColorElement from "../ColorElement"
import { ColorRowProps, Colors } from "./IColorRow"
import  './styles.scss'

const ColorRow = ({
  colors= [],
  selectedColor = 1,
}: ColorRowProps) => {

  const handleSelectColor = (e: any) => {
    console.log(e);
  }

  return (
    <div className="colors">
      <div className="colors__title">Цвет:</div>
      <div className="colors__row">
        {
          colors.map((item: Colors) => (
            <ColorElement 
              key={item.type} 
              link={item.link} 
              type={item.type}
              isSelected={item.type === selectedColor}
              onClick={handleSelectColor}
            />
          ))
        }
        
      </div>
    </div>
  )
}

export default ColorRow