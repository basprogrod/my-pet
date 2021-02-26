import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { SERVER_URL } from '../../constants/constants'
import sagaGetProducts from './sagaGetProducts'
import actionTypes from '../actions/actionTypes'

import stor from '../'

export default function*({payload}: any) {
  try {
    const fd = new FormData(payload)  

    yield call(axios.post, `${SERVER_URL}/addProduct`, fd)

    stor.dispatch({type: actionTypes.net.GET_PRODUCTS})
    
  } catch (error) {
   console.log("sagaAddProduct-> error", error)
    
  }
}