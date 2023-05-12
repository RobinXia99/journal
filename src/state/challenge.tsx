import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getFirestore, doc, getDoc, addDoc, documentId, collection, setDoc } from 'firebase/firestore'
import auth from '@react-native-firebase/auth'
import { PURGE } from 'redux-persist'
import { AppDispatch, RootState } from './store'
import { firebaseApp } from '../config/firebase'

export interface Challenge {
  uid: string
  documentId: string
  text: string
  streak: number
  lastCompletionDate: string
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
  //
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
        lastCompletionDate: '',
      })

      console.log(`Created document: ${newDocRef}`)
    } catch (error) {
      console.log('ERROR_SIGNUP', error)
    }
  }
)

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
