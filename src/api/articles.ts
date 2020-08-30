import { TopStoriesSection } from './types'
import { TIMES_URL_API, TIMES_API_KEY } from '../config'

const url = TIMES_URL_API
const apiKey = TIMES_API_KEY

const articlesAPI = {
  getTopStories: async (section: TopStoriesSection) => {
    let response = await fetch(
      `${url}svc/topstories/v2/${section}.json?api-key=${apiKey}`
    )
    let result = await response.json()

    if (response.status === 401) {
      result = {
        message: 'Unauthorized request. Make sure api-key is set.'
      }
    } else if (response.status === 429) {
      result = {
        message:
          'Too many requests. You reached your per minute or per day rate limit.'
      }
    }

    return result
  }
}

export default articlesAPI
