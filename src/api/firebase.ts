import app from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: process.env.REACT_APP_API_KEY_FIREBASE,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
}

app.initializeApp(config)
const auth = app.auth()

export const firebaseAPI = {
  createUserWithEmailAndPassword: (email: string, password: string) =>
    auth.createUserWithEmailAndPassword(email, password),

  signInWithEmailAndPassword: (email: string, password: string) =>
    auth.signInWithEmailAndPassword(email, password),

  signOut: () => auth.signOut(),

  onAuthStateChanged: (
    nextOrObserver: firebase.Observer<any> | ((a: firebase.User | null) => any),
    error?: (a: firebase.auth.Error) => any,
    completed?: firebase.Unsubscribe
  ) => auth.onAuthStateChanged(nextOrObserver, error, completed)
}
