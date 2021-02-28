import { useState } from 'react'
import './styles.scss'

export type SelectProps = {
  value?: number | string
  options?: any[]
  onSelect?: Function
  [type: string]: any
}

const arr = ['Цена', 'Название', 'Дата']

const Select = ({ value, options = arr, onSelect }: SelectProps) => {
  const [item, setItem] = useState<string | undefined>(undefined)
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

  const handleOpenDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const hendleClick = (index: string | undefined) => {
    setItem(index)
    handleOpenDropdown()
  }

  return (
    <div className={`select ${isDropdownOpen || item ? 'active' : ''}`}>
      <div className="select__display" onClick={handleOpenDropdown}>
        <i className="select__icon icns-sort-amount-asc"></i>
        {item ? <span>{options[+item]}</span> : ''}
      </div>
      <ul className={`select__dropdown ${isDropdownOpen ? 'active' : ''}`}>
        {options.map((el, index) => (
          <li
            key={index}
            className="selctet_item"
            onClick={() => hendleClick(index.toString())}
          >
            {el}
          </li>
        ))}

        <li
          key="undefined"
          className="selctet_item"
          onClick={() => hendleClick(undefined)}
        >
          По умолчанию
        </li>
      </ul>
    </div>
  )
}

export default Select
