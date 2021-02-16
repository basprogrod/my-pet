import { NavLink } from "react-router-dom"
import router from "../../../constants/router"
import Main from "./Main"
import Sidebar from "./Sidebar"
import './styles.scss'

const AdminPage = () => {
  return (
    <>
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