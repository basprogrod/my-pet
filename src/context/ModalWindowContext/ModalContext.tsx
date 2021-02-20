import { useState } from "react"
import { Modals } from "../../components/ModalWindow/Modals"
import { IModalContext, IModalContextState } from "./IModalContext"
import ModalWindowContext from "./ModalWindowContext"

const initialState: IModalContextState = {
  isModalShow: false,
  modalData: undefined,
  deletingCat: undefined,
}

const ModalContext = ({
  children
}: any) => {
  const [state, setState] = useState(initialState)

  const handleCloseWindow = () => {
    setTimeout(() => setState({ ...state, isModalShow: false, modalData: undefined, deletingCat: undefined }), 300)
  }

  const handleShowModal = (type: string) => {
    setState({ 
      ...state, 
      isModalShow: true, 
      modalData: Modals[type]
    })
  }

  const handleShowWarn = (id: string) => {
    setState({ ...state, isModalShow: true, modalData: Modals.WARN_MODAL, deletingCat: id })
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