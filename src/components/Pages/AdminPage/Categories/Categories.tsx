import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modalTypes } from '../../../ModalWindow/Modals'
import Category from '../Category'
import actionTypes from '../../../../store/actions/actionTypes'
import { NetReducerType } from '../../../../store/reducers/netReducer'
import useModalContext from '../../../../hooks/useModalContext'

import './styles.scss'
import Loader from '../../../Loader'

const Categories = () => {
  
  const { handleShowModal, handleShowWarn } = useModalContext()

  const dispatch = useDispatch()
  const { categories } = useSelector((state: NetReducerType) => state.netReducer)
  const { loader } = useSelector((state: NetReducerType) => state.netReducer)

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
      {
        loader 
          ? (
            <Loader />
          )
          : (
            <div className="categories__list">
              {
                categories.map((item: any) => (
                  <Category key={item.id} id={item.id} img={item.img} name={item.title} handleShowWarn={() => {
                    handleShowWarn(item.id)
                  }}/>
                ))
              }
            </div>
          )
      }
     
    </div>
  )
}

export default Categories