const url = 'https://api.nytimes.com/'
const apiKey = process.env.REACT_APP_API_KEY

let TopStoriesSection:
  | 'arts'
  | 'automobiles'
  | 'books'
  | 'business'
  | 'food'
  | 'health'
  | 'home'
  | 'insider'
  | 'magazine'
  | 'movies'
  | 'opinion'
  | 'politics'
  | 'science'
  | 'sports'
  | 'technology'
  | 'travel'
  | 'upshot'
  | 'us'
  | 'world'

export type TopStoriesSection = typeof TopStoriesSection

export const articlesAPI = {
  getTopStories: async (section: TopStoriesSection) => {
    let response = await fetch(
      `${url}svc/topstories/v2/${section}.json?api-key=${apiKey}`
    )
    let result = await response.json()

    return result
  }
}
