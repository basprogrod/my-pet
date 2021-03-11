export type Action = {
  type: string
  payload?: any
}

export type ActionWithPayload<T> = {
  type: string
  payload: T
}

export type GetProductsPayload = {
  sortingField: string
  search?: string
}

export type UpdateProductsPayload = {
  id: string
  form: HTMLFormElement
}

export type ActionTypes<T> = Action | ActionWithPayload<T>
