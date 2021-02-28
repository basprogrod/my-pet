import { Colors } from '../../ColorRow/IColorRow'
import { Sizes } from '../../SizesRow/ISizesRow'

export type PropductCardProps = {
  title: string
  name: string
  price: number
  currency: string
  colors: Colors[]
  sizes: Sizes[]
  discount: number
  description: string
  [type: string]: any
}
