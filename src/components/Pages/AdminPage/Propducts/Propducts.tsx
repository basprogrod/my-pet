import { useEffect, useState } from 'react'
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
        <button>Добавить категорию</button>
        <button>А - Я</button>
        <button>Я - А</button>
        <button onClick={handleSetTableView}>Таблица / Плитка</button>
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