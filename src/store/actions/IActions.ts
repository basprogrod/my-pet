export type Action = {
  type: string
  payload?: any
  [type: string]: any
}

// export type SearchParams = {s
//   field: string
// }

export type GetCategoriesPayload = {
  sortingField: string
  search: string
}
