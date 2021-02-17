import { useEffect, useState } from 'react'
import Select from '../../../Select'
import ProdItem from '../ProdItem'
import './styles.scss'

const Propducts = () => {

  const [tableView, setTableView] = useState(false)

  const handleSetTableView = () => {
    setTableView(!tableView)
  }

  return (
    <div className="products">
      <div className="products__tools">
        <button className="products__tools-btn">
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