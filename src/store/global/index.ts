import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  loading: false,
}

export const global = createSlice({
  name: "global",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.loading = true
    },
    closeLoading: (state) => {
      state.loading = false
    }
  },
})

export const { showLoading, closeLoading } =
  global.actions

export default global.reducer
