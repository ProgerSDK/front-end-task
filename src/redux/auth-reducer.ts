const AUTH_USER = 'auth/AUTH_USER'
const SIGN_OUT_USER = 'auth/SIGN_OUT_USER'

let initialState = {
  isAuth: false,
  user: null as firebase.User | null,
  username: ''
}
type InitialStateType = typeof initialState

const authReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuth: true,
        user: action.user,
        username: action.username
      }
    case SIGN_OUT_USER:
      return {
        ...state,
        isAuth: false,
        user: null,
        username: ''
      }
    default:
      return state
  }
}

type ActionsTypes = AuthUser | SignOutUser

type AuthUser = {
  type: typeof AUTH_USER
  user: firebase.User
  username: string
}
const authUser = (user: firebase.User, username: string = ''): AuthUser => ({
  type: AUTH_USER,
  user,
  username
})

type SignOutUser = {
  type: typeof SIGN_OUT_USER
}
const signOutUser = (): SignOutUser => ({
  type: SIGN_OUT_USER
})

export const verifyAuth = (user: firebase.User | null) => (dispatch: any) => {
  if (user) {
    let username = user?.email?.split('@')[0]
    dispatch(authUser(user, username))
  } else {
    dispatch(signOutUser())
  }
}

export default authReducer
