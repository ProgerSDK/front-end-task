import { combineReducers, createStore } from 'redux'

const rootReducer = combineReducers({})

export type RootState = ReturnType<typeof rootReducer>

let store = createStore(rootReducer)

export default store
