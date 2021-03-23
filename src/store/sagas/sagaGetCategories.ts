import { call, put, delay } from 'redux-saga/effects'
import actionTypes from '../actions/actionTypes'
import { actionsSetCategoriesToStor } from '../actions/netActions'
import { SERVER_URL } from '../../constants/constants'
import axios from 'axios'
import { SagaIterator } from 'redux-saga'
import { Action, CategoryType } from '../actions/IActions'

export default function* (action: Action): SagaIterator {
  try {
    yield delay(1000)

    const resp = yield call(axios.get, `${SERVER_URL}/categories`)

    yield put(actionsSetCategoriesToStor(resp.data.categories))
  } catch (error) {
    console.log('-> error', error)
  }
}
