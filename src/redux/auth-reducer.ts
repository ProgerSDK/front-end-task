import { firebaseAPI } from '../api'

const SET_IS_AUTH = 'auth/SET_IS_AUTH'
const SET_USER_CREDENTIAL = 'auth/SET_USER_CREDENTIAL'

let initialState = {
  isAuth: false,
  userCredential: null as firebase.auth.UserCredential | null
}
export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    default:
      return state
  }
}

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
}
const setUserCredential = (
  userCredential: firebase.auth.UserCredential
): SetUserCredential => ({
  type: SET_USER_CREDENTIAL,
  userCredential
})

export const signIn = (email: string, password: string) => async (
  dispatch: any
) => {
  try {
    let response = await firebaseAPI.signInWithEmailAndPassword(email, password)
    dispatch(setUserCredential(response))
    dispatch(setIsAuth(true))

    console.log(response)
    return { success: true }
  } catch (error) {
    let errorCode = error.code
    let errorMessage = error.message

    return { success: false, errorCode, errorMessage }
  }
}

export default authReducer
