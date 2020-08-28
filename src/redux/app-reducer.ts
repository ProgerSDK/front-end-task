import { RootState } from './types'
import { PaletteType } from '@material-ui/core'

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'
const SET_THEME = 'app/SET_THEME'

let initialState = {
  initialized: false,
  theme: 'dark' as PaletteType
}
type InitialState = typeof initialState

const appReducer = (
  state = initialState,
  action: ActionsTypes
): InitialState => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    case SET_THEME:
      return {
        ...state,
        theme: action.theme
      }
    default:
      return state
  }
}

type ActionsTypes = InitializedSuccess | SetTheme

type InitializedSuccess = {
  type: typeof INITIALIZED_SUCCESS
}
const initializedSuccess = (): InitializedSuccess => ({
  type: INITIALIZED_SUCCESS
})

type SetTheme = {
  type: typeof SET_THEME
  theme: PaletteType
}
const setTheme = (theme: PaletteType): SetTheme => ({
  type: SET_THEME,
  theme
})

export const initializeApp = () => (dispatch: any) => {
  dispatch(initializedSuccess())
}

export const toggleTheme = () => (dispatch: any, getState: () => RootState) => {
  const state = getState()

  if (state.app.theme === 'dark') {
    dispatch(setTheme('light'))
  } else {
    dispatch(setTheme('dark'))
  }
}

export default appReducer
