import { useContext } from 'react'
import { IModalContext } from '../../../../context/ModalWindowContext/IModalContext'
import ModalWindowContext from '../../../../context/ModalWindowContext/ModalWindowContext'
import { modalTypes } from '../../../ModalWindow/Modals'
import Category from '../Category'
import './styles.scss'

const Categories = () => {
  const { handleShowModal } = useContext<IModalContext>(ModalWindowContext)

  const handleOpenModal = () => {
    handleShowModal(modalTypes.ADD_CATEGORY_MODAL)
  }
  return (
    <div className="categories">
      <div className="categories__tools">
        <button className="categories__tools-btn" onClick={handleOpenModal}>
          <i className="icns-plus"></i>
          <span>Добавить категорию</span>
        </button>
      </div>
      <div className="categories__list">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  )
}

export default Categories