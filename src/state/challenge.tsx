import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getFirestore, doc, collection, setDoc, where, getDocs, query, deleteDoc, updateDoc } from 'firebase/firestore'
import auth from '@react-native-firebase/auth'
import { PURGE } from 'redux-persist'
import { AppDispatch, RootState } from './store'
import { firebaseApp } from '../config/firebase'
import { isSameDay, addDays, isYesterday, isToday } from 'date-fns'

export interface Challenge {
  uid: string
  documentId: string
  text: string
  streak: number
  newCompletionDate: string
}

interface initialState {
  challenges: Challenge[]
}

const initialState: initialState = {
  challenges: [],
}

// export const getInitalData = createAsyncThunk<Promise<void>, undefined, { dispatch: AppDispatch; state: RootState }>(
//   'user/getInitialData',
//   async (_, { dispatch }) => {}
// )

export const getChallenges = createAsyncThunk('challenge/getChallenges', async (_, { dispatch }) => {
  try {
    const user = auth().currentUser
    const db = getFirestore(firebaseApp)

    const challengeQuery = query(collection(db, 'challenges'), where('uid', '==', user?.uid))

    const querySnapshot = await getDocs(challengeQuery)
    const userChallenges: Challenge[] = []
    querySnapshot.forEach((doc) => {
      const challenge = doc.data() as Challenge
      if (
        challenge.streak > 0 &&
        !isYesterday(new Date(challenge.newCompletionDate)) &&
        !isToday(new Date(challenge.newCompletionDate))
      ) {
        challenge.streak = 0
        challenge.newCompletionDate = ''
        userChallenges.push(challenge)
      } else {
        userChallenges.push(challenge)
      }
    })

    dispatch(retrievedChallenges(userChallenges))
    console.log('GET_CHALLENGES_SUCCESS')
  } catch (error) {
    console.log('ERROR_SIGNUP', error)
  }
})

export const createChallenge = createAsyncThunk<Promise<void>, string, { dispatch: AppDispatch; state: RootState }>(
  'challenge/createChallenge',
  async (text, { dispatch }) => {
    try {
      const user = auth().currentUser
      const db = getFirestore(firebaseApp)

      const newDocRef = doc(collection(db, 'challenges'))
      await setDoc(newDocRef, {
        uid: user?.uid,
        documentId: newDocRef.id,
        text,
        streak: 0,
        newCompletionDate: '',
        prevCompletionDate: '',
      })

      dispatch(getChallenges())

      console.log('CREATE_CHALLENGE_SUCCESS')
    } catch (error) {
      console.log('ERROR_SIGNUP', error)
    }
  }
)

export const deleteChallenge = createAsyncThunk<Promise<void>, string, { dispatch: AppDispatch; state: RootState }>(
  'challenge/deleteChallenge',
  async (documentId, { dispatch }) => {
    try {
      const db = getFirestore(firebaseApp)

      await deleteDoc(doc(db, 'challenges', documentId))

      console.log('DELETE_CHALLENGE_SUCCESS')

      dispatch(getChallenges())
    } catch (error) {
      console.log('ERROR_SIGNUP', error)
    }
  }
)

export const updateChallenge = createAsyncThunk<
  Promise<void>,
  { text: string; documentId: string; streak: number; newCompletionDate: string },
  { dispatch: AppDispatch; state: RootState }
>('challenge/updateChallenge', async ({ text, documentId, streak, newCompletionDate }, { dispatch }) => {
  try {
    const user = auth().currentUser
    const db = getFirestore(firebaseApp)
    const docRef = doc(db, 'challenges', documentId)

    if (isSameDay(new Date(), addDays(new Date(newCompletionDate), 1))) {
      await updateDoc(docRef, {
        uid: user?.uid,
        documentId,
        text,
        streak: streak + 1,
        newCompletionDate: new Date().toISOString(),
        prevCompletionDate: '',
      })
    } else if (!streak) {
      const docRef = doc(db, 'challenges', documentId)
      await updateDoc(docRef, {
        uid: user?.uid,
        documentId,
        text,
        streak: streak + 1,
        newCompletionDate: new Date().toISOString(),
        prevCompletionDate: '',
      })
    }

    console.log('UPDATE_CHALLENGE_SUCCESS')

    dispatch(getChallenges())
  } catch (error) {
    console.log('ERROR_SIGNUP', error)
  }
})

export const challenge = createSlice({
  name: 'challenge',
  initialState,
  reducers: {
    retrievedChallenges: (state, { payload }: PayloadAction<Challenge[]>) => {
      state.challenges = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState)
  },
})

// Selectors
export const selectChallenges = (state: RootState) => state.challenge.challenges

// Action creators are generated for each case reducer function
export const { retrievedChallenges } = challenge.actions

export default challenge.reducer
