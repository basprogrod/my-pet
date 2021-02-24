import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IModalContext } from '../../../../context/ModalWindowContext/IModalContext'
import ModalWindowContext from '../../../../context/ModalWindowContext/ModalWindowContext'
import { modalTypes } from '../../../ModalWindow/Modals'
import Category from '../Category'
import image from '../../../../assets/img/2-img.jpg'

import './styles.scss'
import actionTypes from '../../../../store/actions/actionTypes'
import { NetReducerType } from '../../../../store/reducers/netReducer'

const Categories = () => {
  const { handleShowModal, handleShowWarn } = useContext<IModalContext>(ModalWindowContext)

  const dispatch = useDispatch()
  const { categories } = useSelector((state: NetReducerType) => state.netReducer) as any

  const handleOpenModal = () => {
    handleShowModal(modalTypes.ADD_CATEGORY_MODAL)
  }

  useEffect(() => {
    dispatch({ type: actionTypes.net.GET_CATEGORIES })
  }, [])

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
          categories.map((item: any) => (
            <Category key={item.id} id={item.id} img={item.img} name={item.title} handleShowWarn={() => {
              handleShowWarn('Cat_1')
            }}/>
          ))
        }
      </div>
    </div>
  )
}

export default Categories