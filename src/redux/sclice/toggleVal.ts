import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  value: boolean
}

const initialState: CounterState = {
  value: false,
}

export const counterSlice = createSlice({
  name: 'toggleVal',
  initialState,
  reducers: {
    toggleServicesEnter: (state) => {
      
      state.value = !state.value
      
    },
    toggleServicesExit: (state) => {
      state.value = !state.value
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { toggleServicesEnter, toggleServicesExit } = counterSlice.actions

export default counterSlice.reducer