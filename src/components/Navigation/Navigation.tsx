import { Link } from "react-router-dom"
import router from "../../constants/router"

import './styles.scss'

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item active"><Link to={router.CATALOG} className="nav__link">Каталог</Link></li>
        <li className="nav__item"><Link to={router.PAYMENT} className="nav__link">Оплата</Link></li>
        <li className="nav__item"><Link to={router.DELIVERY} className="nav__link">Доставка</Link></li>
        <li className="nav__item"><Link to={router.FEEDBACK} className="nav__link">Отзывы</Link></li>
        <li className="nav__item"><Link to={router.CONTACTS} className="nav__link">Контакты</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation