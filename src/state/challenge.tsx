import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getFirestore, doc, collection, setDoc, where, getDocs, query, deleteDoc, updateDoc } from 'firebase/firestore'
import auth from '@react-native-firebase/auth'
import { PURGE } from 'redux-persist'
import { AppDispatch, RootState } from './store'
import { firebaseApp } from '../config/firebase'
import { isYesterday, isToday } from 'date-fns'
import { updateUserStickers } from './user'

export interface Challenge {
  uid: string
  documentId: string
  text: string
  streak: number
  rewardAvailable: boolean
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
    console.log('ERROR_GET_CHALLENGES', error)
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
        rewardAvailable: false,
        newCompletionDate: '',
      })

      dispatch(getChallenges())

      console.log('CREATE_CHALLENGE_SUCCESS')
    } catch (error) {
      console.log('ERROR_CREATE_CHALLENGE', error)
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
      console.log('ERROR_DELETE_CHALLENGE', error)
    }
  }
)

export const updateChallenge = createAsyncThunk<
  Promise<void>,
  { text: string; documentId: string; streak: number },
  { dispatch: AppDispatch; state: RootState }
>('challenge/updateChallenge', async ({ text, documentId, streak }, { dispatch }) => {
  try {
    const user = auth().currentUser
    const db = getFirestore(firebaseApp)
    const docRef = doc(db, 'challenges', documentId)

    // if (isSameDay(new Date(), addDays(new Date(newCompletionDate), 1))) {
    if ((streak + 1) % 5 === 0) {
      await updateDoc(docRef, {
        uid: user?.uid,
        documentId,
        text,
        streak: streak + 1,
        rewardAvailable: true,
        newCompletionDate: new Date().toISOString(),
      })
    } else {
      await updateDoc(docRef, {
        uid: user?.uid,
        documentId,
        text,
        streak: streak + 1,
        rewardAvailable: true,
        newCompletionDate: new Date().toISOString(),
      })
    }

    // }

    console.log('UPDATE_CHALLENGE_SUCCESS')

    dispatch(getChallenges())
  } catch (error) {
    console.log('ERROR_CLAIM_REWARD', error)
  }
})

export const claimReward = createAsyncThunk<
  Promise<void>,
  { documentId: string; sticker: string },
  { dispatch: AppDispatch; state: RootState }
>('challenge/claimReward', async ({ documentId, sticker }, { dispatch }) => {
  try {
    const db = getFirestore(firebaseApp)
    const docRef = doc(db, 'challenges', documentId)

    await updateDoc(docRef, {
      rewardAvailable: false,
    })

    console.log('CLAIM_REWARD_SUCCESS')

    dispatch(getChallenges())
    dispatch(updateUserStickers({ sticker, addSticker: true }))
  } catch (error) {
    console.log('ERROR_CLAIM_REWARD', error)
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
