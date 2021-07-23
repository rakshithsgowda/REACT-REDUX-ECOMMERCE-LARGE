import * as firebase from 'firebase'
const firebaseConfig = {
  apiKey: 'AIzaSyAdUKhsI4mmPMn5Rc9VlzDyO5pQYcMF4Zc',
  authDomain: 'reactreduxecomlarge-frontend.firebaseapp.com',
  projectId: 'reactreduxecomlarge-frontend',
  storageBucket: 'reactreduxecomlarge-frontend.appspot.com',
  messagingSenderId: '187101119688',
  appId: '1:187101119688:web:3769a5055ceb6e04b7d1fd',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.googleAuthProvider()
