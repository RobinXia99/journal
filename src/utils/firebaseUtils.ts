import auth from '@react-native-firebase/auth'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import { firebaseApp } from '../config/firebase'

export const authCreateAccount = async (email: string, password: string) => {
  try {
    const user = auth().currentUser
    const db = getFirestore(firebaseApp)
    await auth().createUserWithEmailAndPassword(email, password)

    const docRef = await setDoc(doc(db, 'users', `${user?.uid}`), {
      uid: user?.uid,
      email: user?.email,
    })

    console.log(`Created document: ${docRef}`)
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
