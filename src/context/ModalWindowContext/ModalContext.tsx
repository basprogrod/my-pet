import { useState } from "react"
import { Modals } from "../../components/ModalWindow/Modals"
import { IModalContext, IModalContextState } from "./IModalContext"
import ModalWindowContext from "./ModalWindowContext"

const initialState: IModalContextState = {
  isModalShow: false,
  ModalComponent: undefined,
}

const ModalContext = ({
  children
}: any) => {
  const [state, setState] = useState(initialState)

  const handleCloseWindow = () => {
    setState({...state, isModalShow: false, ModalComponent: undefined})
  }

  const handleShowModal = (type: string) => {
    setState({...state, isModalShow: true, ModalComponent: Modals[type]})
  }

  const contextValue: IModalContext = {
    ...state,
    handleCloseWindow,
    handleShowModal,
  }

  return <ModalWindowContext.Provider value={contextValue}>{children}</ModalWindowContext.Provider>
}

export default ModalContext