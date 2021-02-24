import actionTypes from "./actionTypes"
import { Action } from "./IActions"

const { net } = actionTypes

export const actionsSetCategoriesToStor = (payload: any): Action => ({
  type: net.SET_CATEGORIES_TO_STORE,
  payload,
})