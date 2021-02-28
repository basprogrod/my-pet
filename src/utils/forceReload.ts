import store from '../store'
import actionTypes from '../store/actions/actionTypes'

export type ReloadHandlersTypes = {
  category(): void
  product(): void
  [type: string]: () => void
}
export default ((): ReloadHandlersTypes => ({
  category: () => store.dispatch({ type: actionTypes.net.GET_CATEGORIES }),
  product: () => store.dispatch({ type: actionTypes.net.GET_PRODUCTS }),
}))()
