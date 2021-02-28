import { call, put, delay } from 'redux-saga/effects'
import actionTypes from '../actions/actionTypes'
import { actionsSetCategoriesToStor } from '../actions/netActions'
import { SERVER_URL } from '../../constants/constants'
import stor from '../'
import axios from 'axios'
import { SagaIterator } from 'redux-saga'

export default function* (action: any): SagaIterator {
  try {
    yield delay(1000)

    const resp = yield call(axios.get, `${SERVER_URL}/categories`)

    yield put(actionsSetCategoriesToStor(resp.data.categories))
  } catch (error) {
    console.log('-> error', error)
  }
}
