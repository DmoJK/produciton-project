import { createAsyncThunk } from "@reduxjs/toolkit"

import { ThunkConfig } from "@/app/providers/StoreProvider"

import { setJsonSettingsMutation } from "../../api/userApi"
import {
  getUserAuthData,
  getUserJsonSettings,
} from "../selectors/userSelectors"
import { JsonSettings } from "../types/jsonSettings"

export const saveJsonSettings = createAsyncThunk<
  JsonSettings,
  JsonSettings,
  ThunkConfig<string>
>(
  "user/saveJsonSettings",
  async (newJsonSettings, { rejectWithValue, getState, dispatch }) => {
    const userData = getUserAuthData(getState())
    const currentJsonSettings = getUserJsonSettings(getState())

    if (!userData) {
      return rejectWithValue("")
    }

    try {
      const response = await dispatch(
        setJsonSettingsMutation({
          userId: userData.id,
          jsonSettings: {
            ...currentJsonSettings,
            ...newJsonSettings,
          },
        })
      ).unwrap()

      if (!response.jsonSettings) {
        return rejectWithValue("")
      }

      return response.jsonSettings
    } catch (error) {
      console.log(error)
      return rejectWithValue("")
    }
  }
)
