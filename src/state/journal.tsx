import { PayloadAction, createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { getFirestore, doc, collection, setDoc, where, getDocs, query, deleteDoc, updateDoc } from 'firebase/firestore'
import auth from '@react-native-firebase/auth'
import { PURGE } from 'redux-persist'
import { AppDispatch, RootState } from './store'
import { firebaseApp } from '../config/firebase'
import { isSameDay, addDays, isYesterday, isToday, getTime } from 'date-fns'
import { groupedJournalsByMonth } from '../utils/dateUtils'

export interface Journal {
  uid: string
  documentId: string
  morningJournal: string
  nightJournal: string
  photo: string
  photoText: string
  created_at: string
}

export interface UniqueMonthJournals {
  date: string
  maxStreak: number
  journals: Journal[]
}

interface initialState {
  journals: Journal[]
  todaysJournal: Journal | null
}

const initialState: initialState = {
  journals: [],
  todaysJournal: null,
}

export const getJournals = createAsyncThunk('journal/getJournals', async (_, { dispatch }) => {
  try {
    const user = auth().currentUser
    const db = getFirestore(firebaseApp)

    const journalsQuery = query(collection(db, 'journals'), where('uid', '==', user?.uid))

    const querySnapshot = await getDocs(journalsQuery)
    const userJournals: Journal[] = []
    querySnapshot.forEach((doc) => {
      const journal = doc.data() as Journal

      userJournals.push(journal)

      if (isToday(new Date(journal.created_at))) {
        dispatch(todaysJournal(journal))
      }
    })
    console.log('GET_JOURNALS_SUCCESS')
    dispatch(retrievedJournals(userJournals))
  } catch (error) {
    console.log('ERROR_SIGNUP', error)
  }
})

export const updateJournal = createAsyncThunk<
  Promise<void>,
  {
    documentId?: string
    morningJournal?: string
    nightJournal?: string
    photo?: string
    photoText?: string
    created_at?: string
  },
  { dispatch: AppDispatch; state: RootState }
>(
  'journal/updateJournal',
  async (
    { documentId = '', morningJournal = '', nightJournal = '', photo = '', photoText = '', created_at = '' },
    { dispatch, getState }
  ) => {
    try {
      const user = auth().currentUser
      const db = getFirestore(firebaseApp)

      const { todaysJournal } = getState().journal

      if (!todaysJournal) {
        const newDocRef = doc(collection(db, 'journals'))
        await setDoc(newDocRef, {
          uid: user?.uid,
          documentId: newDocRef.id,
          morningJournal,
          nightJournal,
          photo,
          photoText,
          created_at: new Date().toISOString(),
        })
      } else if (documentId) {
        const docRef = doc(db, 'journals', documentId)

        await updateDoc(docRef, {
          uid: user?.uid,
          morningJournal,
          nightJournal,
          photo,
          photoText,
          created_at,
        })
      }
      console.log('UPDATE_JOURNALS_SUCCESS')
      dispatch(getJournals())
    } catch (error) {
      console.log('ERROR_SIGNUP', error)
    }
  }
)

export const journal = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    retrievedJournals: (state, { payload }: PayloadAction<Journal[]>) => {
      state.journals = payload
    },
    todaysJournal: (state, { payload }: PayloadAction<Journal>) => {
      state.todaysJournal = payload
    },
    emptyState: (state) => {
      state.todaysJournal = null
      state.journals = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState)
  },
})

// Selectors
export const selectJournals = (state: RootState) => state.journal.journals
export const selectJournalById = (id: string) =>
  createSelector(selectJournals, (journals: Journal[]) => journals.find((journal) => journal.documentId === id))
export const selectTodaysJournal = (state: RootState) => state.journal.todaysJournal
export const selectUniqueMonthJournals = createSelector(selectJournals, (journals) => {
  return groupedJournalsByMonth(journals)
})

export const { retrievedJournals, todaysJournal, emptyState } = journal.actions

export default journal.reducer
