import auth from '@react-native-firebase/auth'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import { firebaseApp } from '../config/firebase'

export const authCreateAccount = async (firstName: string, email: string, password: string) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password)
    const db = getFirestore(firebaseApp)
    const user = auth().currentUser

    await setDoc(doc(db, 'users', `${user?.uid}`), {
      uid: user?.uid,
      firstName,
      email,
      stickers: [],
    })

    await authSignIn(email, password)

    console.log(`CREATE_ACCOUNT_SUCCESS`)
  } catch (error) {
    console.log('ERROR_SIGNUP', error)
  }
}

//Sign in with email
export const authSignIn = async (email: string, password: string) => {
  try {
    await auth().signInWithEmailAndPassword(email, password)
  } catch (error) {
    console.log('ERROR_SIGNIN', error)
  }
}
