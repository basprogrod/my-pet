export type EditProductModalProps = {
  handleClose: () => void
  title: string
}

export interface IEditModalState {
  id: string | undefined
  name: string | undefined
  price: string | undefined
  brand: string | undefined
  description: string | undefined
  img: string | undefined
  category: string | undefined
}
