import { ModalsPropTypes } from "../../components/ModalWindow/IModalWindow";

export interface IModalContextState {
  isModalShow: boolean
  ModalComponent: React.FC<ModalsPropTypes> | undefined
}

export interface IModalContext extends IModalContextState {
  handleCloseWindow: () => void
  handleShowModal: (type: string) => void
}