import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { SERVER_URL } from '../../constants/constants'
import actionTypes from '../actions/actionTypes'

import stor from '../'
import forceReload from '../../utils/forceReload'
import { ActionWithPayload } from '../actions/IActions'

export default function* ({ payload }: ActionWithPayload<HTMLFormElement>) {
  try {
    const fd = new FormData(payload)

    yield call(axios.post, `${SERVER_URL}/addProduct`, fd)

    forceReload.product()
  } catch (error) {
    console.log('sagaAddProduct-> error', error)
  }
}
