import axios from 'axios'
import { call } from 'redux-saga/effects'
import { SERVER_URL } from '../../constants/constants'
import actionTypes from '../actions/actionTypes'
import store from '../'

export default function*(action: any) {
  const { payload } = action
  console.log("-> action", action)
  try {
    const fd = new FormData(payload)

    yield call(axios.post, `${SERVER_URL}/addCategory`, fd)  

    store.dispatch({type: actionTypes.net.GET_CATEGORIES})
    
  } catch (error) {
    console.log("-> error", error)
  }
}