export type SelectConfigItemType = {
  name: string
  key: string
  [type: string]: string | number
}
export type SelectEventType = { field: string; key: string }

export type SelectProps = {
  icon?: string
  type?: 'balck' | undefined
  value?: number | string
  options?: SelectConfigItemType[]
  onSelect: (e: SelectEventType) => void
  [type: string]: any
}
