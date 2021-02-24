import CategoryAddModal from "./CategoryAddModal";
import { ModalsType } from "./IModalWindow";
import ProductAddModal from "./ProductAddModal";
import WarningModal from "./WarningModal";

export const modalTypes: {[type: string]: string} = {
  ADD_PRODUCT_MODAL: 'ADD_PRODUCT_MODAL',
  ADD_CATEGORY_MODAL: 'ADD_CATEGORY_MODAL',
  WARN_MODAL: 'WARN_MODAL',
}

export const Modals: ModalsType = {
  ADD_PRODUCT_MODAL: {
    Comp: ProductAddModal,
    title: 'Добавить продукт',
  },
  ADD_CATEGORY_MODAL: {
    Comp: CategoryAddModal,
    title: 'Добавить категорию',
    
  },
  WARN_MODAL: {
    Comp: WarningModal,
    title: 'Удаление',
  },
}

