import { PayloadAction } from "@reduxjs/toolkit"

import { buildSlice } from "@/shared/lib/store"

import { loginByUsername } from "../services/loginByUsername/loginByUsername"
import { LoginSchema } from "../types/LoginSchema"

const initialState: LoginSchema = {
  password: "",
  username: "",
  isLoading: false,
}

export const loginSlice = buildSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.isLoading = false
      })
  },
})

export const {
  actions: loginActions,
  reducer: loginReducer,
  useActions: useLoginActions,
} = loginSlice
