import { Link, NavLink } from "react-router-dom"
import router from "../../constants/router"
import { NavigationProps } from "./INavigation"

import './styles.scss'

const Navigation = ({
  isOpen,
}: NavigationProps) => {
  return (
    <nav className={`nav ${isOpen ? 'active' : ''}`}>
      <ul className="nav__list">
        <li className="nav__item"><NavLink to={router.CATALOG} className="nav__link">Каталог</NavLink></li>
        <li className="nav__item"><NavLink to={router.PAYMENT} className="nav__link">Оплата</NavLink></li>
        <li className="nav__item"><NavLink to={router.DELIVERY} className="nav__link">Доставка</NavLink></li>
        <li className="nav__item"><NavLink to={router.FEEDBACK} className="nav__link">Отзывы</NavLink></li>
        <li className="nav__item"><NavLink to={router.CONTACTS} className="nav__link">Контакты</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navigation