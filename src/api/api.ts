const url = 'https://api.nytimes.com/'
const apiKey = 'apikey'

export const getTopStories = async (
  section:
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
    | 'world' = 'home'
) => {
  let response = await fetch(
    `${url}svc/topstories/v2/${section}.json?api-key=${apiKey}`
  )
  let result = await response.json()

  return result
}
