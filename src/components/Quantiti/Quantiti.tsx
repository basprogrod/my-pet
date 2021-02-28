import { useCallback } from 'react'
import { QuantityProps } from './IQuantiti'

import './styles.scss'

const Quantiti = ({ quantity, onSelect, onChange }: QuantityProps) => {
  const handleClickByMinus = useCallback(() => {
    console.log('-')

    onSelect(false)
  }, [])

  const handleClickByPlus = useCallback(() => {
    console.log('+')

    onSelect(true)
  }, [])

  return (
    <div className="quantity">
      <div className="quantity__title">Количество:</div>
      <button className="quantity__btn" onClick={handleClickByMinus}>
        -
      </button>
      <button className="quantity__btn right" onClick={handleClickByPlus}>
        +
      </button>
      <input
        type="text"
        className="quantity__inp"
        value={quantity}
        onChange={onChange}
      />
    </div>
  )
}

export default Quantiti
