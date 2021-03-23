import { useState } from 'react'
import { selectConfig, sorting } from '../../constants/constants'
import { SelectConfigItemType, SelectProps } from './ISelect'

import './styles.scss'

const Select = ({ value, options = selectConfig, onSelect, type = undefined, icon = 'icns-plus' }: SelectProps) => {
  const [item, setItem] = useState<string>('')
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

  const handleOpenDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const hendleClick = (e: React.MouseEvent) => {
    const el = e.target as HTMLLIElement

    setItem(el.dataset.name || '')
    onSelect({ key: el.dataset.key || sorting.DEFAULT, field: el.dataset.name || '' })

    handleOpenDropdown()
  }

  return (
    <div className={`select ${isDropdownOpen || item ? 'active' : ''} ${type ? 'black' : ''}`}>
      <div className="select__display" onClick={handleOpenDropdown}>
        <i className={`select__icon ${icon}`}></i>
        {item}
      </div>
      <ul className={`select__dropdown ${isDropdownOpen ? 'active' : ''}`}>
        {options.map((el: SelectConfigItemType) => (
          <li key={el.name} data-name={el.name} data-key={el.key} className="selctet_item" onClick={hendleClick}>
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Select
