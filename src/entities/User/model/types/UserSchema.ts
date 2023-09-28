import { FeatureFlags } from "@/shared/types/featureFlags"

import { UserRole } from "../consts/UserRole"

export interface User {
  id: string
  username: string
  avatar?: string
  role?: UserRole[]
  features?: FeatureFlags
}

export interface UserSchema {
  authData?: User

  _inited: boolean
}
