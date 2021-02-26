import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useModalContext from '../../../../hooks/useModalContext'
import Select from '../../../Select'
import ProdItem from '../ProdItem'
import { modalTypes } from '../../../ModalWindow/Modals'

import './styles.scss'
import { NetReducerType } from '../../../../store/reducers/netReducer'
import actionTypes from '../../../../store/actions/actionTypes'
import Loader from '../../../Loader'
import { ProdItemProps } from '../ProdItem/IProdItem'

const Propducts = () => {
  const { handleShowModal } = useModalContext()

  const { products, loader } = useSelector((state: NetReducerType) => state.netReducer)
  const dispatch = useDispatch()

  const openProducAddModal = () => {
    handleShowModal(modalTypes.ADD_PRODUCT_MODAL)
  }

  const [tableView, setTableView] = useState(false)

  const handleSetTableView = () => {
    setTableView(!tableView)
  }

  useEffect(() => {
    dispatch({type: actionTypes.net.GET_PRODUCTS})
  }, [])

  return (
    <div className="products">
      <div className="products__tools">
        <button className="products__tools-btn" onClick={openProducAddModal}>
          <i className="icns-plus"></i>
          <span>Добавить продукт</span>
        </button>        
        <button 
          className="products__tools-btn"
          onClick={handleSetTableView}>
            Вид
        </button>
        <Select />
      </div>
      {
        loader
        ? <Loader/>
        : (
          <div className="products__list">
            {
              products.map((item: ProdItemProps) => (
                <ProdItem
                  tableView={tableView} 
                  brand={item.brand}
                  category={item.category}
                  price={item.price}
                  name={item.name}
                  desctiption={item.desctiption}
                  img={item.img}
                />
              ))
            }
          </div>
        )
      }
      
    </div>
  )
}

export default Propducts