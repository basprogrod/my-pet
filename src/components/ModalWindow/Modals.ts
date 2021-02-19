import CategoryAddModal from "./CategoryAddModal";
import { ModalsType } from "./IModalWindow";
import ProductAddModal from "./ProductAddModal";
import WarningModal from "./WarningModal";

export const modalTypes: {[type: string]: string} = {
  ADD_PROJECT_MODAL: 'ADD_PROJECT_MODAL',
  ADD_CATEGORY_MODAL: 'ADD_CATEGORY_MODAL',
  WARN_MODAL: 'WARN_MODAL',
}

export const Modals: ModalsType = {
  ADD_PROJECT_MODAL: ProductAddModal,
  ADD_CATEGORY_MODAL: CategoryAddModal,
  WARN_MODAL: WarningModal,
}

