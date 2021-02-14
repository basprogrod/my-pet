import { useCallback, useState } from "react"
import SizeElement from "../SizeElement"
import { Sizes, SizesRowProps } from "./ISizesRow"
import './styles.scss'

const SizesRow = ({
  sizes = [],
  selectedSize = 'S',
}: SizesRowProps) => {
  const [state, setState] = useState({})

  const handleSelectSize = useCallback((e: string) => {
    console.log(e)
  }, [])

  return (
    <div className="sizes">
      <div className="sizes__title">Размеры:</div>

      <div className="sizes__row">
        {
          sizes.map((item: Sizes) => (
            <SizeElement 
              key={item.type}
              onClick={handleSelectSize}
              type={item.type} 
              isExist={item.isExist} 
              isSelected={item.type === selectedSize}
            />
          ))
        }
      </div>
    </div>
  )
}

export default SizesRow