import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modalTypes } from '../ModalWindow/Modals'
import { NetReducerType } from '../../store/reducers/netReducer'
import { actionsGetProducts } from '../../store/actions/netActions'
import { defaultQurey } from '../../constants/constants'
import { SelectEventType } from '../Select/ISelect'
import Loader from '../Loader'
import useModalContext from '../../hooks/useModalContext'
import Select from '../Select'
import ProdItem from '../ProdItem'
import Button from '../Button'

import './styles.scss'
import { IProductItem } from '../ProdItem/IProdItem'

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

  const handleSort = (e: SelectEventType) => {
    dispatch(actionsGetProducts({ sortingField: e.field }))
  }

  useEffect(() => {
    dispatch(actionsGetProducts(defaultQurey))
  }, [])

  return (
    <div className="products">
      <div className="products__tools">
        <Button text="Добавить продукт" onClick={openProducAddModal} icon="icns-plus" />
        <Button text="Вид" onClick={handleSetTableView} />
        <Select onSelect={handleSort} icon="icns-sort-amount-asc" />
      </div>
      {loader ? (
        <Loader />
      ) : (
        <div className="products__list">
          {products.map((item: IProductItem) => (
            <ProdItem
              key={item.id}
              id={item.id}
              tableView={tableView}
              brand={item.brand}
              category={item.category}
              price={item.price}
              name={item.name}
              description={item.description}
              img={item.img}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Propducts
