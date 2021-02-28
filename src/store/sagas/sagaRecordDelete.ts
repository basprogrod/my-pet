import { call } from 'redux-saga/effects'
import { SERVER_URL } from '../../constants/constants'
import axios from 'axios'
import { DeletingRecordType } from '../../context/ModalWindowContext/IModalContext'
import forceReload from '../../utils/forceReload'

export default function* ({ payload: { type, id } }: { type: string; payload: DeletingRecordType }) {
  try {
    yield call(axios.delete, `${SERVER_URL}/deleteRecord/${type}/${id}`)

    forceReload[type]()
  } catch (error) {
    console.log('sagaRecordDelete -> error', error)
  }
}
