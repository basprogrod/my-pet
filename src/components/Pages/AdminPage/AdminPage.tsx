import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import router from '../../../constants/router'
import useModalContext from '../../../hooks/useModalContext'
import Window from '../../Window'
import Main from './Main'
import Sidebar from './Sidebar'

import './styles.scss'

const initState = {}

const AdminPage = () => {
  const { isModalShow } = useModalContext()
  const [state, setState] = useState(initState)

  return (
    <>
      {isModalShow && <Window />}

      <header className="admin-header">
        <NavLink className="admin-header__link" to={router.HOME}>
          В магазин
        </NavLink>
      </header>

      <main className="admin-main">
        <Sidebar />
        <Main />
      </main>
    </>
  )
}

export default AdminPage
