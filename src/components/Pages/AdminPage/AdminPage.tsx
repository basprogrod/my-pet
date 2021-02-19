import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import router from "../../../constants/router"
import ModalContext from "../../../context/ModalWindowContext/ModalContext"
import ModalWindowContext from "../../../context/ModalWindowContext/ModalWindowContext"
import ModalWindow from "../../ModalWindow"
import Select from "../../Select"
import Window from "../../Window"
import Main from "./Main"
import Sidebar from "./Sidebar"
import './styles.scss'

const initState = {}

const AdminPage = () => {
  const { isModalShow } = useContext(ModalWindowContext)
  const [state, setState] = useState(initState)

  return (
    <>
      {isModalShow && <Window />}

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