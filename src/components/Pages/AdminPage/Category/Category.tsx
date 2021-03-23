import React, { useCallback } from 'react'
import useModalContext from '../../../../hooks/useModalContext'
import { CategoryProps } from './ICategory'

import './styles.scss'

const Category: React.FC<CategoryProps> = ({ name, id, img }) => {
  const { handleShowWarn } = useModalContext()

  const handleDelete = useCallback(() => handleShowWarn({ id, type: 'category' }), [id])

  return (
    <div className="category">
      <div className="category__title">{name}</div>

      <button className="category__btn delete" onClick={handleDelete}>
        <i className="icns-bin" />
      </button>

      <img className="category__bg" src={img} alt="" />

      <div className="category__btns">
        <button className="category__btn">Продукты</button>

        <button className="category__btn">
          <i className="icns-pencil" />
          <span>Редактировать</span>
        </button>
      </div>
    </div>
  )
}

export default Category
