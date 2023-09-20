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
} from "./model/selectors/userSelectors"
