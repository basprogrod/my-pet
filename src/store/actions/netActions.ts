import actionTypes from './actionTypes'
import { Action, GetCategoriesPayload } from './IActions'

const { net } = actionTypes

export const actionsSetCategoriesToStor = (payload: any): Action => ({
  type: net.SET_CATEGORIES_TO_STORE,
  payload,
})

export const actionsSetProductsToStor = (payload: any): Action => ({
  type: net.SET_PRODUCTS_TO_STORE,
  payload,
})

export const actionsGetCategories = (payload: GetCategoriesPayload): Action => ({
  type: actionTypes.net.GET_CATEGORIES,
  payload,
})
