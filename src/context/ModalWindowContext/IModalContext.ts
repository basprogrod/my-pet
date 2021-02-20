import { ModalsPropTypes } from "../../components/ModalWindow/IModalWindow";

export interface IModalContextState {
  isModalShow: boolean
  modalData: React.FC<ModalsPropTypes> | undefined | any
  deletingCat: string | number | undefined
}

export interface IModalContext extends IModalContextState {
  handleCloseWindow: () => void
  handleShowModal: (type: string) => void
  handleShowWarn: (type: string) => void
}