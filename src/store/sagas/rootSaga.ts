import { takeEvery, take, call } from 'redux-saga/effects'
import actionTypes from '../actions/actionTypes'
import sagaAddCategory from './sagaAddCategory'
import sagaAddProduct from './sagaAddProduct'
import sagaGetProducts from './sagaGetProducts'
import sagaGetCategories from './sagaGetTCategories'
import sagaRecordDelete from './sagaRecordDelete'
import sagaUpdateProduct from './sagaUpdateProduct'

export default function* () {
  yield takeEvery(actionTypes.net.GET_CATEGORIES, sagaGetCategories)
  yield takeEvery(actionTypes.net.ADD_CATEGORY, sagaAddCategory)
  yield takeEvery(actionTypes.net.DELETE_A_RECORD, sagaRecordDelete)
  yield takeEvery(actionTypes.net.ADD_PRODUCT, sagaAddProduct)
  yield takeEvery(actionTypes.net.GET_PRODUCTS, sagaGetProducts)
  yield takeEvery(actionTypes.net.UPDATE_PRODUCT, sagaUpdateProduct)
  // yield call(testSaga)
}
