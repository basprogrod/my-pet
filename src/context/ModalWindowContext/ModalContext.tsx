import { FC, JSXElementConstructor, ReactElement, ReactNode, useState } from 'react'
import { Modals } from '../../components/ModalWindow/Modals'
import { DeletingRecordType, IModalContext, IModalContextState } from './IModalContext'
import ModalWindowContext from './ModalWindowContext'

const initialState: IModalContextState = {
  isModalShow: false,
  modalData: undefined,
  deletingRecord: undefined,
  editProductModalId: undefined,
}

const ModalContext: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState(initialState)

  const handleCloseWindow = () => {
    setTimeout(
      // для плавного загрытия модалок
      () =>
        setState({
          ...state,
          isModalShow: false,
          modalData: undefined,
          deletingRecord: undefined,
          editProductModalId: undefined,
        }),
      300
    )
  }

  const handleShowModal = (type: string, editProductModalId?: string) => {
    setState({
      ...state,
      isModalShow: true,
      modalData: Modals[type],
      editProductModalId,
    })
  }

  const handleShowWarn = (shape: DeletingRecordType) => {
    setState({
      ...state,
      isModalShow: true,
      modalData: Modals.WARN_MODAL,
      deletingRecord: shape,
    })
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
