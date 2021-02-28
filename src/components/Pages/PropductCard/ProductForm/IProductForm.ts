import { Colors } from '../../../ColorRow/IColorRow'
import { Sizes } from '../../../SizesRow/ISizesRow'

export type ProductFormProps = {
  title: string
  name: string
  price: number
  currency: string
  colors: Colors[]
  sizes: Sizes[]
  discount: number
  [type: string]: any
}
