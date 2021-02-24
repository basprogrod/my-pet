import { call, put } from 'redux-saga/effects'
import actionTypes from '../actions/actionTypes';
import { actionsSetCategoriesToStor } from '../actions/netActions';
import { SERVER_URL } from '../../constants/constants'
import axios from 'axios'

export default function*(action: any) {
  try {
    const resp = yield call(axios.get, `${SERVER_URL}/categories`)  

    yield put(actionsSetCategoriesToStor(resp.data.categories))

  } catch (error) {
    console.log("-> error", error)
  }
}