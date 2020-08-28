import { articlesAPI } from '../api'
import { TopStoriesSection, Article } from '../typings'

const SET_ARTICLES = 'articles/SET_ARTICLES'
const SET_ERROR = 'articles/SET_ERROR'
const RESET_STATE = 'articles/RESET_STATE'

let initialState = {
  isLoaded: false,
  items: null as Array<Article> | null,
  error: null as string | null
}
export type InitialStateType = typeof initialState

const articlesReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case SET_ARTICLES:
      return {
        ...state,
        isLoaded: true,
        items: action.articles
      }
    case SET_ERROR:
      return {
        ...state,
        isLoaded: true,
        error: action.error
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

type ActionsTypes = SetArticles | SetError | ResetState

type SetArticles = {
  type: typeof SET_ARTICLES
  articles: Array<Article>
}
export const setArticles = (articles: Array<Article>): SetArticles => ({
  type: SET_ARTICLES,
  articles
})

type SetError = {
  type: typeof SET_ERROR
  error: string
}
export const setError = (error: string): SetError => ({
  type: SET_ERROR,
  error
})

type ResetState = {
  type: typeof RESET_STATE
}
const resetState = (): ResetState => ({
  type: RESET_STATE
})

export const getTopStories = (section: TopStoriesSection = 'home') => async (
  dispatch: any
) => {
  let response = await articlesAPI.getTopStories(section)

  if (response.status === 'OK') {
    dispatch(setArticles(response.results))
  } else if (!response.status) {
    dispatch(setError(response.message))
  }
}

export const refreshArticles = () => async (dispatch: any) => {
  dispatch(resetState())
  dispatch(getTopStories())
}

export default articlesReducer
