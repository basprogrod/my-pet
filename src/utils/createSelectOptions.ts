import { SelectConfigItemType } from '../components/Select/ISelect'

export default (data: Array<{ [type: string]: any }>): SelectConfigItemType[] => {
  return data.map((item) => ({
    name: item.title,
    key: item.id,
  }))
}
