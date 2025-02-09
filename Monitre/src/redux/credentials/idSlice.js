import { createSlice } from '@reduxjs/toolkit'

export const idSlice = createSlice({
  name: 'id',
  initialState: {
    value: "",
  },
  reducers: {
    assignId: (state, id) => {
      state.value = state.value + id.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { assignId } = idSlice.actions

export default idSlice.reducer