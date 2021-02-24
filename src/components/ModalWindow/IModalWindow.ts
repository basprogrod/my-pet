import { CategoryAddModalProps } from "./CategoryAddModal/ICategoryAddModal"
import { ProductAddModalProps } from "./ProductAddModal/IProductAddModal"

export type ModalsPropTypes = ProductAddModalProps | CategoryAddModalProps

export type ModalsData = {
  Comp: React.FC<ModalsPropTypes>
  title: string
}

export type ModalsType = {
  [type: string]: ModalsData
}