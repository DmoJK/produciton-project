import { PayloadAction } from "@reduxjs/toolkit"

import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage"
import { setFeatureFlags } from "@/shared/lib/features"
import { buildSlice } from "@/shared/lib/store"

import { initAuthData } from "../sevices/initAuthData"
import { saveJsonSettings } from "../sevices/saveJsonSettings"
import { JsonSettings } from "../types/jsonSettings"
import { User, UserSchema } from "../types/UserSchema"

const initialState: UserSchema = {
  authData: undefined,
  _inited: false,
}

export const userSlice = buildSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
      setFeatureFlags(action.payload.features)
      localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id)
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      saveJsonSettings.fulfilled,
      (state, { payload }: PayloadAction<JsonSettings>) => {
        if (state.authData) {
          state.authData.jsonSettings = payload
        }
      }
    )
    builder.addCase(
      initAuthData.fulfilled,
      (state, { payload }: PayloadAction<User>) => {
        state.authData = payload
        setFeatureFlags(payload.features)
        state._inited = true
      }
    )
    builder.addCase(initAuthData.rejected, (state) => {
      state._inited = true
    })
  },
})

export const {
  actions: userActions,
  reducer: userReducer,
  useActions: useUserActions,
} = userSlice
