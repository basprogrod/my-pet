import { ModalsData, ModalsPropTypes } from '../../components/ModalWindow/IModalWindow'

export type DeletingRecordType = {
  id: string
  type: string
}

export interface IModalContextState {
  isModalShow: boolean
  modalData: ModalsData | undefined
  deletingRecord: DeletingRecordType | undefined
  editProductModalId: string | undefined
}

export interface IModalContext extends IModalContextState {
  handleCloseWindow: () => void
  handleShowModal: (type: string, editProductModalId?: string) => void
  handleShowWarn: (type: DeletingRecordType) => void
}
