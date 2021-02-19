import { ProductAddModalProps } from "./ProductAddModal/IProductAddModal"

export type ModalsPropTypes = ProductAddModalProps

export type ModalsType = {
  [type: string]: React.FC<ModalsPropTypes>
}