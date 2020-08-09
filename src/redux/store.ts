import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import articlesReducer from './articles-reducer'
import logger from 'redux-logger'

const rootReducer = combineReducers({
  articles: articlesReducer
})

export type RootState = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(thunk, logger))

export type AppDispatch = typeof store.dispatch

export default store
