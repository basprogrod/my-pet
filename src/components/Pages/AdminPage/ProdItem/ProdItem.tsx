import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import useModalContext from '../../../../hooks/useModalContext'
import { ProdItemProps } from './IProdItem'

import './styles.scss'

const ProdItem = ({ id, tableView, name, price, brand, desctiption, img, category }: ProdItemProps) => {
  const { handleShowWarn } = useModalContext()

  const handleDelete = useCallback(() => handleShowWarn({ id, type: 'product' }), [id])

  return (
    <div className={`product-item ${tableView ? 'table-view' : ''}`}>
      <div className="product-item__title">{name}</div>
      <img src={img} alt="" className="product-item__bg" />
      <div className="product-item__footer">
        <div className="product-item__info">
          <div className="product-item__price">{price}</div>
          <div className="product-item__name">{brand}</div>
        </div>
        <div className="product-item__btns">
          <button className="product-item__btn">
            <i className="icns-bin" onClick={handleDelete} />
          </button>
          <button className="product-item__btn">
            <i className="icns-pencil" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProdItem
