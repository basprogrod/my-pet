import axios from 'axios'
import { call } from 'redux-saga/effects'
import { SERVER_URL } from '../../constants/constants'
import forceReload from '../../utils/forceReload'
import { Action, ActionTypes } from '../actions/IActions'

export default function* (action: ActionTypes<FormData>) {
  const { payload } = action

  try {
    yield call(axios.post, `${SERVER_URL}/addCategory`, payload)

    forceReload.category()
  } catch (error) {
    console.log('-> error', error)
  }
}
