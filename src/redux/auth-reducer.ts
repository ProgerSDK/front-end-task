import { firebaseAPI } from '../api'

const SET_IS_AUTH = 'auth/SET_IS_AUTH'
const SET_USER_CREDENTIAL = 'auth/SET_USER_CREDENTIAL'
const RESET_STATE = 'auth/RESET_STATE'

let initialState = {
  isAuth: false,
  userCredential: null as firebase.auth.UserCredential | null,
  username: ''
}
export type InitialStateType = typeof initialState

const authReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case SET_USER_CREDENTIAL:
      return {
        ...state,
        userCredential: action.userCredential,
        username: action.username
      }
    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.isAuth
      }
    case RESET_STATE:
      return {
        ...state,
        ...initialState
      }
    default:
      return state
  }
}

type ActionsTypes = SetIsAuth | SetUserCredential | ResetState

type SetIsAuth = {
  type: typeof SET_IS_AUTH
  isAuth: boolean
}
const setIsAuth = (isAuth: boolean): SetIsAuth => ({
  type: SET_IS_AUTH,
  isAuth
})

type SetUserCredential = {
  type: typeof SET_USER_CREDENTIAL
  userCredential: firebase.auth.UserCredential
  username: string
}
const setUserCredential = (
  userCredential: firebase.auth.UserCredential,
  username: string = ''
): SetUserCredential => ({
  type: SET_USER_CREDENTIAL,
  userCredential,
  username
})

type ResetState = {
  type: typeof RESET_STATE
}
const resetState = (): ResetState => ({
  type: RESET_STATE
})

export const signUp = (email: string, password: string) => async (
  dispatch: any
) => {
  try {
    await firebaseAPI.createUserWithEmailAndPassword(email, password)
    return { success: true }
  } catch (error) {
    let errorCode = error.code
    let errorMessage = error.message
    return { success: false, errorCode, errorMessage }
  }
}

export const signIn = (email: string, password: string) => async (
  dispatch: any
) => {
  try {
    let response = await firebaseAPI.signInWithEmailAndPassword(email, password)
    let username = response.user?.email?.split('@')[0]
    dispatch(setUserCredential(response, username))
    dispatch(setIsAuth(true))
    return { success: true }
  } catch (error) {
    let errorCode = error.code
    let errorMessage = error.message
    return { success: false, errorCode, errorMessage }
  }
}

export const signOut = () => async (dispatch: any) => {
  try {
    await firebaseAPI.signOut()
    dispatch(resetState())
    return { success: true }
  } catch (error) {
    let errorCode = error.code
    let errorMessage = error.message
    return { success: false, errorCode, errorMessage }
  }
}

export default authReducer
