import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modalTypes } from '../ModalWindow/Modals'
import { NetReducerType } from '../../store/reducers/netReducer'
import { actionsGetCategories } from '../../store/actions/netActions'
import useModalContext from '../../hooks/useModalContext'
import Loader from '../Loader'
import Category from '../Category'

import './styles.scss'
import { CategoryType } from '../../store/actions/IActions'

const Categories = () => {
  const { handleShowModal } = useModalContext()

  const { categories, loader } = useSelector((state: NetReducerType) => state.netReducer)

  const dispatch = useDispatch()

  const handleOpenModal = () => {
    handleShowModal(modalTypes.ADD_CATEGORY_MODAL)
  }

  useEffect(() => {
    dispatch(actionsGetCategories())
  }, [])

  return (
    <div className="categories">
      <div className="categories__tools">
        <button className="categories__tools-btn" onClick={handleOpenModal}>
          <i className="icns-plus" />
          <span>Добавить категорию</span>
        </button>
      </div>
      {loader ? (
        <Loader />
      ) : (
        <div className="categories__list">
          {categories.map((item: CategoryType) => (
            <Category key={item.id} id={item.id} img={item.img} name={item.title} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Categories
