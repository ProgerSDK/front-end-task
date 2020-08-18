import { firebaseAPI } from '../api'

const TOGGLE_SIGN_UP_SUCCESS = 'auth/TOGGLE_SIGN_UP_SUCCESS'

let initialState = {
  isAuth: false
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
    let response = await firebaseAPI.createUserWithEmailAndPassword(
      email,
      password
    )
    dispatch(toggleSignUpSuccess(true))

    console.log(response)
    return { success: true }
  } catch (error) {
    let errorCode = error.code
    let errorMessage = error.message

    return { success: false, errorCode, errorMessage }
  }
}

type ToggleSignUpSuccess = {
  type: typeof TOGGLE_SIGN_UP_SUCCESS
  flag: boolean
}
export const toggleSignUpSuccess = (flag: boolean): ToggleSignUpSuccess => ({
  type: TOGGLE_SIGN_UP_SUCCESS,
  flag
})

export default authReducer
