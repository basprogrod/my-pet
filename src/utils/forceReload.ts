import { defaultQurey } from '../constants/constants'
import store from '../store'
import actionTypes from '../store/actions/actionTypes'
import { actionsGetCategories, actionsGetProducts } from '../store/actions/netActions'

export type ReloadHandlersTypes = {
  category(): void
  product(): void
  [type: string]: () => void
}
export default ((): ReloadHandlersTypes => ({
  category: () => store.dispatch(actionsGetCategories()),
  product: () => store.dispatch(actionsGetProducts(defaultQurey)),
}))()
