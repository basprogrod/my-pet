import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import rootSaga from './sagas/rootSaga'

const sagaMW = createSagaMiddleware()
const logger = createLogger({
  collapsed: true,
})

const middlewares: any = [sagaMW, logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMW.run(rootSaga)

export default store
