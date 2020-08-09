import { TopStoriesSection, articlesAPI } from '../api'

const SET_ARTICLES = 'articles/SET_ARTICLES'
const SET_ERROR = 'articles/SET_ERROR'

type Image = {
  url: string
  format: string
  height: number
  width: number
  type: string
  subtype: string
  caption: string
  copyright: string
}

export type Article = {
  section: string
  subsection: string
  title: string
  abstract: string
  url: string
  uri: string
  byline: string
  item_type: string
  updated_date: string
  created_date: string
  published_date: string
  material_type_facet: string
  kicker: string
  des_facet: Array<any>
  org_facet: Array<any>
  per_facet: Array<any>
  geo_facet: Array<any>
  multimedia: Array<Image>
  short_url: string
}

let initialState = {
  isLoaded: false,
  items: null as Array<Article> | null,
  error: null as string | null
}
export type InitialStateType = typeof initialState

const articlesReducer = (
  state = initialState,
  action: any
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
    default:
      return state
  }
}

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

export default articlesReducer
