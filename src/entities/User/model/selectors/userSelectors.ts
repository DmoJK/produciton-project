import { StateSchema } from "@/app/providers/StoreProvider"
import { buildSelector } from "@/shared/lib/store"

import { JsonSettings } from "../types/jsonSettings"

export const [useUserInited, getUserInited] = buildSelector(
  (state: StateSchema) => state.user._inited
)
export const [useUserAuthData, getUserAuthData] = buildSelector(
  (state: StateSchema) => state.user.authData
)

const defaultJsonSettings: JsonSettings = {}

export const [useUserJsonSettings, getUserJsonSettings] = buildSelector(
  (state) => state.user.authData?.jsonSettings ?? defaultJsonSettings
)
