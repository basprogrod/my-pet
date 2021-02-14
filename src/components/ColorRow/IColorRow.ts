export type Colors = {
  link: string
  type: string | number
  isExist: boolean
}

export type ColorRowProps =  {
  colors: Array<Colors>
  selectedColor?: string | number
}

