import { useState } from "react"
import { NavLink } from "react-router-dom"
import router from "../../../constants/router"
import Select from "../../Select"
import Window from "../../Window"
import Main from "./Main"
import Sidebar from "./Sidebar"
import './styles.scss'

const initState = {
  isModalShow: false,
  modalType: undefined,
}

const AdminPage = () => {
  const [state, setState] = useState(initState)

  const handleCloseWindow = () => {
    setState({...state, isModalShow: false})
  }

  const handleShowModal = (type: string) => {
    setState({...state, isModalShow: true})
  }

  return (
    <>
      {state.isModalShow && <Window closeWindow={handleCloseWindow} />}

      <header className="admin-header">
        <NavLink className="admin-header__link" to={router.HOME}>В магазин</NavLink>
      </header>

      <main className="admin-main">
        <Sidebar />
        <Main />
      </main>
    </>
  )
}

export default AdminPage