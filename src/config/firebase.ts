import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyA_uGFG7C5KISoS_4loDDK5fKaib24p0LU',
  authDomain: 'mentaljournal-e53a1.firebaseapp.com',
  databaseURL: 'https://mentaljournal-e53a1.firebaseio.com',
  projectId: 'mentaljournal-e53a1',
  storageBucket: 'mentaljournal-e53a1.appspot.com',
  messagingSenderId: '1027412841880',
  appId: '1:1027412841880:ios:234e820d32759ab3b107ed',
}

export const firebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth(firebaseApp)
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
