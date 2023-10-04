import { FeatureFlags } from "@/shared/types/featureFlags"

import { JsonSettings } from "./jsonSettings"
import { UserRole } from "../consts/UserRole"

export interface User {
  id: string
  username: string
  avatar?: string
  role?: UserRole[]
  features?: FeatureFlags
  jsonSettings?: JsonSettings
}

export interface UserSchema {
  authData?: User

  _inited: boolean
}
