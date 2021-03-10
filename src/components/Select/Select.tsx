import { useState } from 'react'
import { selectConfig, sorting } from '../../constants/constants'
import { SelectConfigItemType, SelectProps } from './ISelect'

import './styles.scss'

const Select = ({ value, options = selectConfig, onSelect }: SelectProps) => {
  const [item, setItem] = useState<string>('')
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

  const handleOpenDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const hendleClick = (e: React.MouseEvent) => {
    const el = e.target as HTMLLIElement

    setItem(el.dataset.name || '')
    onSelect(el.dataset.sortKey || sorting.DEFAULT)
    console.log('-> el.dataset.sortKey', el.dataset.sortKey)

    handleOpenDropdown()
  }

  return (
    <div className={`select ${isDropdownOpen || item ? 'active' : ''}`}>
      <div className="select__display" onClick={handleOpenDropdown}>
        <i className="select__icon icns-sort-amount-asc"></i>
        {item}
      </div>
      <ul className={`select__dropdown ${isDropdownOpen ? 'active' : ''}`}>
        {options.map((el: SelectConfigItemType) => (
          <li
            key={el.name}
            data-name={el.name}
            data-sort-key={el.sortKey}
            className="selctet_item"
            onClick={hendleClick}
          >
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Select
