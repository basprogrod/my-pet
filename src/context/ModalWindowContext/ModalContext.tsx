import { useState } from "react"
import { Modals } from "../../components/ModalWindow/Modals"
import { IModalContext, IModalContextState } from "./IModalContext"
import ModalWindowContext from "./ModalWindowContext"

const initialState: IModalContextState = {
  isModalShow: false,
  ModalComponent: undefined,
  deletingCat: undefined,
}

const ModalContext = ({
  children
}: any) => {
  const [state, setState] = useState(initialState)

  const handleCloseWindow = () => {
    setState({ ...state, isModalShow: false, ModalComponent: undefined, deletingCat: undefined })
  }

  const handleShowModal = (type: string) => {
    setState({ ...state, isModalShow: true, ModalComponent: Modals[type] })
  }

  const handleShowWarn = (id: string) => {
    setState({ ...state, isModalShow: true, ModalComponent: Modals.WARN_MODAL, deletingCat: id })
    console.log('WARN id', id);
  }

  const contextValue: IModalContext = {
    ...state,
    handleCloseWindow,
    handleShowModal,
    handleShowWarn,
  }

  return <ModalWindowContext.Provider value={contextValue}>{children}</ModalWindowContext.Provider>
}

export default ModalContext