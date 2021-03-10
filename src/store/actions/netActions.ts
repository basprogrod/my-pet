import actionTypes from './actionTypes'
import { Action, ActionTypes, GetProductsPayload } from './IActions'

const { net } = actionTypes

export const actionsSetCategoriesToStor = (payload: any): ActionTypes<any> => ({
  type: net.SET_CATEGORIES_TO_STORE,
  payload,
})

export const actionsSetProductsToStor = (payload: any): ActionTypes<any> => ({
  type: net.SET_PRODUCTS_TO_STORE,
  payload,
})

export const actionsGetCategories = (): ActionTypes<any> => ({
  type: actionTypes.net.GET_CATEGORIES,
})

export const actionsGetProducts = (payload: GetProductsPayload): ActionTypes<GetProductsPayload> => ({
  type: actionTypes.net.GET_PRODUCTS,
  payload,
})
