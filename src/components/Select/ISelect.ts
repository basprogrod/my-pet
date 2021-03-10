export type SelectProps = {
  value?: number | string
  options?: any[]
  onSelect: (field: string) => void
  [type: string]: any
}

export type SelectConfigItemType = {
  name: string
  sortKey: string
}
