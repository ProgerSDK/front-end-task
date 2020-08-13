import { TopStoriesSection } from './types'
const url = 'https://api.nytimes.com/'
const apiKey = process.env.REACT_APP_API_KEY_TIMES

export const articlesAPI = {
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
