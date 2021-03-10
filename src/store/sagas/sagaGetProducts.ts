import axios from 'axios'
import { Saga, SagaIterator } from 'redux-saga'
import { call, put, delay } from 'redux-saga/effects'
import { SERVER_URL } from '../../constants/constants'
import { Action, ActionTypes, GetProductsPayload } from '../actions/IActions'
import { actionsSetProductsToStor } from '../actions/netActions'

export default function* ({ payload }: ActionTypes<GetProductsPayload>): SagaIterator {
  if (!payload) return

  const { search, sortingField } = payload

  try {
    yield delay(1000)

    const resp = yield call(axios.get, `${SERVER_URL}/products?search=${search}&sort=${sortingField}`)

    yield put(actionsSetProductsToStor(resp.data.products))
  } catch (error) {
    console.log('sagaGetProducts-> error', error)
  }
}

//sagaGetProducts
