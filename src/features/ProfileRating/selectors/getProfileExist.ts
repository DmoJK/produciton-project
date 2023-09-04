import { createSelector } from "@reduxjs/toolkit"
import { StateSchema } from "@/app/providers/StoreProvider"

const getProfileData = (state: StateSchema) => state.profile?.data

export const getProfileExist = createSelector(getProfileData, (data) =>
  Boolean(data)
)
