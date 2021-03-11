import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useModalContext from '../../../hooks/useModalContext'
import useSetImage from '../../../hooks/useSetImage'
import { actionsAddProducts, actionsUpdateProduct } from '../../../store/actions/netActions'
import { NetReducerType } from '../../../store/reducers/netReducer'
import { IProductItem } from '../../Pages/AdminPage/ProdItem/IProdItem'
import { EditProductModalProps, IEditModalState } from './IEditProductModal'

const initialState: IEditModalState = {
  id: undefined,
  name: undefined,
  price: undefined,
  brand: undefined,
  description: undefined,
  img: undefined,
  category: undefined,
}

const EditProductModal = ({ handleClose, title }: EditProductModalProps) => {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    setState({ ...state, ...prodItem })
  }, [])

  const { img, handleSetImg } = useSetImage(state.img)
  const { editProductModalId } = useModalContext()
  const { products } = useSelector((state: NetReducerType) => state.netReducer)
  const dispatch = useDispatch()

  const prodItem: IProductItem = products.find((item: IProductItem) => item.id === editProductModalId)

  const handleChange = (e: ChangeEvent) => {
    const input = e.target as HTMLInputElement

    setState({ ...state, [input.name]: input.value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement

    handleClose()

    dispatch(actionsUpdateProduct({ form, id: editProductModalId || '' }))
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
                <input type="text" name="brand" value={state.brand} id="product-brand" onChange={handleChange} />
              </div>
            </div>
            <div className="product-popup__row">
              <div className="product-popup__cell">
                <label htmlFor="product-name">Название товара</label>
                <input type="text" name="name" value={state.name} id="product-name" onChange={handleChange} />
              </div>
            </div>
            <div className="product-popup__row">
              <div className="product-popup__cell">
                <label htmlFor="product-price">Цена</label>
                <input type="text" name="price" value={state.price} id="product-price" onChange={handleChange} />
              </div>
            </div>
            <div className="product-popup__row">
              <div className="product-popup__cell">
                <label htmlFor="product-category">Категория</label>
                <input
                  type="text"
                  name="category"
                  value={state.category}
                  id="product-category"
                  onChange={handleChange}
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
              value={state.description}
              cols={30}
              rows={10}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="modal-window__footer">
        <button type="submit">Отправить</button>
      </div>
    </form>
    // <div>
    //   {title} EditProductModal {editProductModalId}
    // </div>
  )
}

export default EditProductModal
