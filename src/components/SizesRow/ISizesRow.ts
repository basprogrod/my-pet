import { SizeElementProps } from '../SizeElement/ISizeElement'

export type Sizes = {
  type: string
  isExist: boolean
}

export type SizesRowProps = {
  sizes: Array<Sizes>
  selectedSize?: string
}