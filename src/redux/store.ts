import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import articlesReducer from './articles-reducer'
import logger from 'redux-logger'
import authReducer from './auth-reducer'
import appReducer from './app-reducer'

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  articles: articlesReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store
