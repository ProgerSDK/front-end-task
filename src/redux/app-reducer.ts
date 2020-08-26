const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'

let initialState = {
  initialized: false
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
    default:
      return state
  }
}

type ActionsTypes = InitializedSuccess

type InitializedSuccess = {
  type: typeof INITIALIZED_SUCCESS
}

const initializedSuccess = (): InitializedSuccess => ({
  type: INITIALIZED_SUCCESS
})

export const initializeApp = () => (dispatch: any) => {
  dispatch(initializedSuccess())
}

export default appReducer
