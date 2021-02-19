import { useContext } from 'react'
import { IModalContext } from '../../../../context/ModalWindowContext/IModalContext'
import ModalWindowContext from '../../../../context/ModalWindowContext/ModalWindowContext'
import { modalTypes } from '../../../ModalWindow/Modals'
import Category from '../Category'
import image from '../../../../assets/img/2-img.jpg'

import './styles.scss'

const Categories = () => {
  const { handleShowModal, handleShowWarn } = useContext<IModalContext>(ModalWindowContext)

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
        {
          (() => {
            
            return <Category id="1" img={image} name="Категория 1" handleShowWarn={() => {
              handleShowWarn('Cat_1')
            }}/>
          })()
        }
        {
          (() => {
            
            return <Category id="2" img={image} name="Категория 2" handleShowWarn={() => {
              handleShowWarn('Cat_2')
            }}/>
          })()
        }
      </div>
    </div>
  )
}

export default Categories