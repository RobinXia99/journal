import { createSlice } from '@reduxjs/toolkit'

import { RootState } from './store'

interface InitialState {
  requestUserState: string
  // Create request state
}

const initialState: InitialState = {
  requestUserState: 'hi',
}

export const request = createSlice({
  name: 'request',
  initialState,
  reducers: {
    requestUserState: (state, { payload }) => {
      state.requestUserState = payload
    },
    requestDevicesState: (state, { payload }) => {
      state.requestUserState = payload
    },
  },
  extraReducers: () => {
    // builder.addCase(getUser.fulfilled, (state) => {
    //   state.requestUserState = 'success'
    // })
  },
})

// Selectors
export const selectUserRequestState = (state: RootState) => state.request.requestUserState

// Action creators are generated for each case reducer function
export const { requestUserState, requestDevicesState } = request.actions

export default request.reducer
