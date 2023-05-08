import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import auth from '@react-native-firebase/auth'
import { PURGE } from 'redux-persist'
import { RootState } from './store'
import { firebaseApp } from '../config/firebase'

export interface User {
  uid: string | null
  email: string | null
}

const initialState: User = {
  uid: null,
  email: '',
}

// export const getInitalData = createAsyncThunk<Promise<void>, undefined, { dispatch: AppDispatch; state: RootState }>(
//   'user/getInitialData',
//   async (_, { dispatch }) => {}
// )

export const getUser = createAsyncThunk('user/getUser', async (_, { dispatch }) => {
  try {
    const user = auth().currentUser
    const db = getFirestore(firebaseApp)

    const docRef = doc(db, 'users', `${user?.uid}`)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const user = docSnap.data() as User
      dispatch(loggedIn(user))
    }
  } catch (error) {
    console.log('DOCUMENT_NOT_FOUND')
  }
})

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loggedIn: (state, { payload }: PayloadAction<User>) => {
      state.uid = payload.uid
      state.email = payload.email
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState)
  },
})

// Selectors
export const selectIsAuthenticated = (state: RootState) => !!state.user?.uid
export const selectUser = (state: RootState) => state.user

// Action creators are generated for each case reducer function
export const { loggedIn } = user.actions

export default user.reducer
