import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import router from '../../../constants/router'
import useModalContext from '../../../hooks/useModalContext'
import Main from '../../Main'
import Window from '../../Window'

import './styles.scss'

const initState = {}

const AdminPage = () => {
  const { isModalShow } = useModalContext()
  // const [state, setState] = useState(initState)

  return (
    <div className="admin">
      {isModalShow && <Window />}

      <header className="admin-header">
        <nav className="navigation">
          <NavLink to={router.CATEGORIES} className="navigation__btn">
            Категории
          </NavLink>
          <NavLink to={router.PRODUCTS} className="navigation__btn">
            Продукты
          </NavLink>
        </nav>
        <NavLink className="admin-header__link" to={router.HOME}>
          В магазин
        </NavLink>
      </header>

      <Main />
    </div>
  )
}

export default AdminPage
