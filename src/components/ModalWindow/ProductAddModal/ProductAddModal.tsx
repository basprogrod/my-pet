import { useState } from 'react'
import { useDispatch } from 'react-redux'
import useSetImage from '../../../hooks/useSetImage'
import actionTypes from '../../../store/actions/actionTypes'
import { ProductAddModalProps } from './IProductAddModal'

import './styles.scss'

const ProductAddModal = ({ handleClose, title }: ProductAddModalProps) => {
  const { img, handleSetImg } = useSetImage()

  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const form = e.target

    handleClose()

    dispatch({ type: actionTypes.net.ADD_PRODUCT, payload: form })
  }

  return (
    <form className="modal-window__popup product-popup" onSubmit={handleSubmit}>
      <div className="modal-window__header">
        <div className="modal-window__title">{title}</div>
        <i className="icns-cross" onClick={handleClose}></i>
      </div>

      <div className="modal-window__body">
        <div className="product-popup__row top">
          <div className="product-popup__cell img">
            <label className="product-popup__image-label" htmlFor="image">
              {img ? <img src={img} /> : <i className="icns-image"></i>}
            </label>
            <input
              type="file"
              name="prod-image"
              id="image"
              onChange={handleSetImg}
            />
          </div>

          <div className="product-popup__cell right">
            <div className="product-popup__row">
              <div className="product-popup__cell">
                <label htmlFor="product-brand">Бренд</label>
                <input
                  type="text"
                  name="brand"
                  /* value="" */ id="product-brand"
                />
              </div>
            </div>
            <div className="product-popup__row">
              <div className="product-popup__cell">
                <label htmlFor="product-name">Название товара</label>
                <input
                  type="text"
                  name="name"
                  /* value="" */ id="product-name"
                />
              </div>
            </div>
            <div className="product-popup__row">
              <div className="product-popup__cell">
                <label htmlFor="product-price">Цена</label>
                <input
                  type="text"
                  name="price"
                  /* value="" */ id="product-price"
                />
              </div>
            </div>
            <div className="product-popup__row">
              <div className="product-popup__cell">
                <label htmlFor="product-category">Категория</label>
                <input
                  type="text"
                  name="category"
                  /* value="" */ id="product-category"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="product-popup__row">
          <div className="product-popup__cell">
            <label htmlFor="product-descr">Описание</label>
            <textarea
              id="product-descr"
              name="descr"
              cols={30}
              rows={10} /* value="" */
            />
          </div>
        </div>
      </div>

      <div className="modal-window__footer">
        <button type="submit">Добавить</button>
      </div>
    </form>
  )
}

export default ProductAddModal
