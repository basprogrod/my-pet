import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas/rootSaga'

const sagaMW = createSagaMiddleware()

const middlewares: any = [
  sagaMW
]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMW.run(rootSaga)

export default store