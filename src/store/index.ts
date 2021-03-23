import Redux, { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import rootSaga from './sagas/rootSaga'

const sagaMW = createSagaMiddleware()
const logger = createLogger({
  collapsed: true,
})

const middlewares: [SagaMiddleware, Redux.Middleware] = [sagaMW, logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMW.run(rootSaga)

export default store
