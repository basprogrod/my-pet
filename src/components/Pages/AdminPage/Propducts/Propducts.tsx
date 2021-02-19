import { useContext, useEffect, useState } from 'react'
import { IModalContext } from '../../../../context/ModalWindowContext/IModalContext'
import ModalWindowContext from '../../../../context/ModalWindowContext/ModalWindowContext'
import { modalTypes } from '../../../ModalWindow/Modals'
import Select from '../../../Select'
import ProdItem from '../ProdItem'

import './styles.scss'

const Propducts = () => {
  const { handleShowModal } = useContext(ModalWindowContext) as IModalContext

  const openProducAddModal = () => {
    handleShowModal(modalTypes.ADD_PRODUCT_MODAL)
  }

  const [tableView, setTableView] = useState(false)

  const handleSetTableView = () => {
    setTableView(!tableView)
  }

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

      <div className="products__list">
        <ProdItem tableView={tableView} />
        <ProdItem tableView={tableView} />
        <ProdItem tableView={tableView} />
        <ProdItem tableView={tableView} />
        <ProdItem tableView={tableView} />
        <ProdItem tableView={tableView} />
        <ProdItem tableView={tableView} />
        <ProdItem tableView={tableView} />
        <ProdItem tableView={tableView} />
        <ProdItem tableView={tableView} />
      </div>
    </div>
  )
}

export default Propducts