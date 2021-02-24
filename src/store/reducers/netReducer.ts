import Categories from "../../components/Pages/AdminPage/Categories";
import actionTypes from "../actions/actionTypes"

export type InitStateType = {
  categories: any[]
}

export type NetReducerType = {
  netReducer: InitStateType
}

const initState: InitStateType = {
  categories: [],
}

export default (state = initState, action: any) => {
  const {type, payload} = action

  switch (type) {
    case actionTypes.net.GET_CATEGORIES: 
      console.log('loader');
      return state
    case actionTypes.net.SET_CATEGORIES_TO_STORE: 
      return {
        ...state,
        categories: payload,
      }
    default:
      return state
  }
}