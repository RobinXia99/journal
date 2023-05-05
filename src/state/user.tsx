import { createSlice } from '@reduxjs/toolkit'
import { PURGE } from 'redux-persist'
import { RootState } from './store'

export interface User {
  firebaseId: string | null
  firstName: string
  lastName: string
}

const initialState: User = {
  firebaseId: null,
  firstName: '',
  lastName: '',
}

// export const getInitalData = createAsyncThunk<Promise<void>, undefined, { dispatch: AppDispatch; state: RootState }>(
//   'user/getInitialData',
//   async (_, { dispatch }) => {}
// )

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState)
  },
})

// Selectors
export const selectIsAuthenticated = (state: RootState) => !!state.user?.firebaseId
export const selectUser = (state: RootState) => state.user

// Action creators are generated for each case reducer function

export default user.reducer
