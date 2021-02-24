import { ModalsData, ModalsPropTypes } from "../../components/ModalWindow/IModalWindow";

export interface IModalContextState {
  isModalShow: boolean
  modalData: ModalsData | undefined
  deletingCat: string | number | undefined
}

export interface IModalContext extends IModalContextState {
  handleCloseWindow: () => void
  handleShowModal: (type: string) => void
  handleShowWarn: (type: string) => void
}