export interface IProductItem {
  id: string
  name: string
  price: string
  brand: string
  description: string
  img: string
  category: string
}

export interface IProdItemProps extends IProductItem {
  tableView: boolean
}
