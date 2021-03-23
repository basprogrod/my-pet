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
  { name: 'Цена', key: sorting.PRICE },
  { name: 'Дата', key: sorting.DATA },
  { name: 'Название', key: sorting.NAME },
  { name: 'По умолчанию', key: sorting.DEFAULT },
]

export const defaultQurey = { sortingField: sorting.DEFAULT }
