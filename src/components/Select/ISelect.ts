export type SelectProps = {
  value?: number | string
  options?: any[]
  onSelect?: Function
  [type: string]: any
}

export type SelectConfigItemType = {
  name: string
  sortKey: string
}
