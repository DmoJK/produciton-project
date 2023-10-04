export {
  userReducer,
  userActions,
  useUserActions,
} from "./model/slice/userSlice"
export type { User, UserSchema } from "./model/types/UserSchema"
export { UserRole } from "./model/consts/UserRole"
export {
  getUserRoles,
  isUserAdmin,
  isUserManager,
} from "./model/selectors/roleSelector"

export {
  useUserInited,
  getUserInited,
  useUserAuthData,
  getUserAuthData,
  useUserJsonSettings,
  getUserJsonSettings,
} from "./model/selectors/userSelectors"

export { initAuthData } from "./model/sevices/initAuthData"
export { saveJsonSettings } from "./model/sevices/saveJsonSettings"
