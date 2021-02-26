import { useContext } from "react"
import { IModalContext } from "../context/ModalWindowContext/IModalContext"
import ModalWindowContext from "../context/ModalWindowContext/ModalWindowContext"

export default (): IModalContext => useContext<IModalContext>(ModalWindowContext)