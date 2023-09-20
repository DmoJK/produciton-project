import { StateSchema } from "@/app/providers/StoreProvider"
import { buildSelector } from "@/shared/lib/store"

export const [useLoginUsername, getLoginUsername] = buildSelector(
  (state: StateSchema) => state?.login?.username || ""
)
export const [useLoginPassword, getLoginPassword] = buildSelector(
  (state: StateSchema) => state?.login?.password || ""
)
export const [useLoginIsLoading, getLoginIsLoading] = buildSelector(
  (state: StateSchema) => state?.login?.isLoading || false
)
export const [useLoginError, getLoginError] = buildSelector(
  (state: StateSchema) => state?.login?.error
)
