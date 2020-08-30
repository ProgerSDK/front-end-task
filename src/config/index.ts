const TIMES_URL_API = 'https://api.nytimes.com/'
const TIMES_API_KEY = process.env.REACT_APP_API_KEY_TIMES

const FIREBASE_CONFIG = {
  apiKey: process.env.REACT_APP_API_KEY_FIREBASE,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
}

export { TIMES_URL_API, TIMES_API_KEY, FIREBASE_CONFIG }
