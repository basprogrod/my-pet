import { takeEvery } from 'redux-saga/effects'
import actionTypes from '../actions/actionTypes';
import sagaAddCategory from './sagaAddCategory';
import sagaGetCategories from './sagaGetTCategories';

export default function* () {
  yield takeEvery(actionTypes.net.GET_CATEGORIES, sagaGetCategories)
  yield takeEvery(actionTypes.net.ADD_CATEGORY, sagaAddCategory)
}