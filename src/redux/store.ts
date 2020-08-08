import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import articlesReducer from './articles-reducer'

const rootReducer = combineReducers({
  articles: articlesReducer
})

export type RootState = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store
