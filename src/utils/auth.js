import firebase from 'firebase/app'
import 'firebase/auth'
// import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyD1-fFrVoN3vKee1sFkP5UFhh1S58bzzQs',
  authDomain: 'attp-8def0.firebaseapp.com',
  databaseURL: 'https://attp-8def0.firebaseio.com',
  projectId: 'attp-8def0',
  storageBucket: 'attp-8def0.appspot.com',
  messagingSenderId: '647617806457'
}
firebase.initializeApp(config)

const provider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth()

export { provider, auth }