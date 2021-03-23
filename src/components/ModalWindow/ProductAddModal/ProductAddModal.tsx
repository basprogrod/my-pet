import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useSetImage from '../../../hooks/useSetImage'
import { actionsAddProducts } from '../../../store/actions/netActions'
import { NetReducerType } from '../../../store/reducers/netReducer'
import createSelectOptions from '../../../utils/createSelectOptions'
import Select from '../../Select'
import { SelectConfigItemType, SelectEventType } from '../../Select/ISelect'
import { ProductAddModalProps } from './IProductAddModal'

import './styles.scss'

const ProductAddModal = ({ handleClose, title }: ProductAddModalProps) => {
  const { img, handleSetImg } = useSetImage()

  const [state, setState]: any = useState('')

  const { categories } = useSelector((state: NetReducerType) => state.netReducer)

  const options: SelectConfigItemType[] = createSelectOptions(categories)

  const dispatch = useDispatch()

  const handleSelect = (e: SelectEventType) => {
    console.log(e)
    setState(e.field)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement

    const fd = new FormData(form)

    fd.append('category', state)

    handleClose()

    dispatch(actionsAddProducts(fd))
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
            <input type="file" name="prod-image" id="image" onChange={handleSetImg} />
          </div>

          <div className="product-popup__cell right">
            <div className="product-popup__row">
              <div className="product-popup__cell">
                <label htmlFor="product-brand">Бренд</label>
                <input type="text" name="brand" /* value="" */ id="product-brand" />
              </div>
            </div>
            <div className="product-popup__row">
              <div className="product-popup__cell">
                <label htmlFor="product-name">Название товара</label>
                <input type="text" name="name" /* value="" */ id="product-name" />
              </div>
            </div>
            <div className="product-popup__row">
              <div className="product-popup__cell">
                <label htmlFor="product-price">Цена</label>
                <input type="text" name="price" /* value="" */ id="product-price" />
              </div>
            </div>
            <div className="product-popup__row">
              <div className="product-popup__cell">
                <label htmlFor="product-category">Категория</label>
                {/* <input type="text" name="category" id="product-category" /> */}
                <Select options={options} onSelect={handleSelect} type="balck" />
              </div>
            </div>
          </div>
        </div>

        <div className="product-popup__row">
          <div className="product-popup__cell">
            <label htmlFor="product-descr">Описание</label>
            <textarea id="product-descr" name="descr" cols={30} rows={10} />
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
