import { call } from 'redux-saga/effects'
import { SERVER_URL } from '../../constants/constants'
import axios from 'axios'

export default function*({ payload }: any) {
  
  try {
    console.log('sagaRecordDelete');
    
    yield call(axios.delete, `${SERVER_URL}/deleteRecord/${payload}`)
  } catch (error) {
    console.log("sagaRecordDelete -> error", error)
  }
}