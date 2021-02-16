import { NavLink, Route } from 'react-router-dom'
import router from '../../../../constants/router'
import './styles.scss'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to={router.CATEGORIES} className="sidebar__btn">Категории</NavLink>
      <NavLink to={router.PRODUCTS} className="sidebar__btn">Все продукты</NavLink>
    </div>
  )
}

export default Sidebar