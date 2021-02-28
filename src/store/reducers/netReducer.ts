import Categories from '../../components/Pages/AdminPage/Categories'
import actionTypes from '../actions/actionTypes'

export type InitStateType = {
  categories: any[]
  products: any[]
  loader: boolean
}

export type NetReducerType = {
  netReducer: InitStateType
}

const initState: InitStateType = {
  categories: [],
  products: [],
  loader: false,
}

export default (state = initState, action: any) => {
  const { type, payload } = action

  switch (type) {
    case actionTypes.net.GET_CATEGORIES:
      return {
        ...state,
        loader: true,
      }
    case actionTypes.net.GET_PRODUCTS:
      return {
        ...state,
        loader: true,
      }
    case actionTypes.net.SET_CATEGORIES_TO_STORE:
      return {
        ...state,
        categories: payload,
        loader: false,
      }
    case actionTypes.net.SET_PRODUCTS_TO_STORE:
      return {
        ...state,
        products: payload,
        loader: false,
      }
    default:
      return state
  }
}
