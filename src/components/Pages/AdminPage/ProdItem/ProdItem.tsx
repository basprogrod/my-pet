import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import useModalContext from '../../../../hooks/useModalContext'
import { modalTypes } from '../../../ModalWindow/Modals'
import { IProdItemProps } from './IProdItem'

import './styles.scss'

const ProdItem = ({ id, tableView, name, price, brand, description, img, category }: IProdItemProps) => {
  const { handleShowWarn, handleShowModal } = useModalContext()

  const handleDelete = useCallback(() => handleShowWarn({ id, type: 'product' }), [id])
  const handleEdit = useCallback(() => handleShowModal(modalTypes.EDIT_PRODUCT_MODAL, id), [id])

  return (
    <div className={`product-item ${tableView ? 'table-view' : ''}`}>
      <img src={img} alt="" className="product-item__bg" />
      {tableView || <div className="product-item__title">{name}</div>}
      <div className="product-item__footer">
        <div className="product-item__info">
          {tableView && <div className="product-item__title">{name}</div>}
          <div className="product-item__price">${price}</div>
          <div className="product-item__name">{brand}</div>
        </div>
        {tableView && <div className="product-item__descr">{description}</div>}
        <div className="product-item__btns">
          <button className="product-item__btn">
            <i className="icns-bin" onClick={handleDelete} />
          </button>
          <button className="product-item__btn" onClick={handleEdit}>
            <i className="icns-pencil" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProdItem
