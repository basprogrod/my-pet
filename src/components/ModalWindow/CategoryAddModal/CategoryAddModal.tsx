import useSetImage from '../../../hooks/useSetImage'
import { useDispatch } from 'react-redux'
import { CategoryAddModalProps } from './ICategoryAddModal'
import axios from 'axios'

import './styles.scss'
import { SERVER_URL } from '../../../constants/constants'
import actionTypes from '../../../store/actions/actionTypes'
import { actionsAddCategory } from '../../../store/actions/netActions'

const CategoryAddModal = ({ handleClose, title, image }: CategoryAddModalProps) => {
  const { img, handleSetImg } = useSetImage(image)
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const fd = new FormData(form)

    dispatch(actionsAddCategory(fd))

    handleClose()
  }

  return (
    <form className="modal-window__popup category-popup" onSubmit={handleSubmit}>
      <div className="modal-window__header">
        <div className="modal-window__title">{title}</div>
        <i className="icns-cross" onClick={handleClose}></i>
      </div>

      <div className="modal-window__body">
        <div className="category-popup__imge-block">
          <label className="category-popup__image-label" htmlFor="image">
            {img ? <img src={img} /> : <i className="icns-image"></i>}
          </label>
          <input type="file" name="cat-image" id="image" onChange={handleSetImg} />
        </div>
        <div className="category-popup__name">
          <label htmlFor="cat-name">Введите имя</label>
          <input type="text" name="cat-name" id="cat-name" />
        </div>
      </div>

      <div className="modal-window__footer">
        <button type="submit">Добавить</button>
      </div>
    </form>
  )
}

export default CategoryAddModal
