import axios from 'axios'
import { Saga, SagaIterator } from 'redux-saga'
import { call, put, delay } from 'redux-saga/effects'
import { SERVER_URL } from '../../constants/constants'
import { actionsSetProductsToStor } from '../actions/netActions'

export default function* (): SagaIterator {
  console.log(123)

  try {
    yield delay(1000)

    const resp = yield call(axios.get, `${SERVER_URL}/products`)

    yield put(actionsSetProductsToStor(resp.data.products))
  } catch (error) {
    console.log('sagaGetProducts-> error', error)
  }
}

//sagaGetProducts
