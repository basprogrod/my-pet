import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { SERVER_URL } from '../../constants/constants'
import actionTypes from '../actions/actionTypes'

import stor from '../'
import forceReload from '../../utils/forceReload'
import { ActionWithPayload, UpdateProductsPayload } from '../actions/IActions'
import { SagaIterator } from 'redux-saga'

export default function* ({ payload }: ActionWithPayload<UpdateProductsPayload>): SagaIterator {
  // debugger
  const { form, id } = payload
  try {
    const fd = new FormData(form)
    fd.append('id', id)

    yield call(axios.put, `${SERVER_URL}/updateProduct`, fd)

    forceReload.product()
  } catch (error) {
    console.log('sagaAddProduct-> error', error)
  }
}
