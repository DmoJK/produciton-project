import { StateSchema } from "@/app/providers/StoreProvider"
import { buildSelector } from "@/shared/lib/store"

export const [useProfileData, getProfileData] = buildSelector(
  (state: StateSchema) => state.profile?.data
)
export const [useProfileError, getProfileError] = buildSelector(
  (state: StateSchema) => state.profile?.error
)
export const [useProfileForm, getProfileForm] = buildSelector(
  (state: StateSchema) => state.profile?.form
)
export const [useProfileIsLoading, getProfileIsLoading] = buildSelector(
  (state: StateSchema) => state.profile?.isLoading
)
export const [useProfileReadonly, getProfileReadonly] = buildSelector(
  (state: StateSchema) => state.profile?.readonly
)
export const [useProfileValidateErrors, getProfileValidateErrors] =
  buildSelector((state: StateSchema) => state.profile?.validateErrors)
