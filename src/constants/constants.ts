import { SelectConfigItemType } from '../components/Select/ISelect'

export const SERVER_URL: string = 'http://localhost:3001'
export const SCROLL_FOR_DISPLAYNG_FIXED_HEADER: number = 100

export const sorting: { [type: string]: string } = {
  PRICE: 'price',
  NAME: 'name',
  DATA: 'date',
  DEFAULT: '',
}

export const selectConfig: SelectConfigItemType[] = [
  { name: 'Цена', sortKey: sorting.PRICE },
  { name: 'Дата', sortKey: sorting.DATA },
  { name: 'Название', sortKey: sorting.NAME },
  { name: 'По умолчанию', sortKey: sorting.DEFAULT },
]

export const defaultQurey = { sortingField: sorting.DEFAULT }
