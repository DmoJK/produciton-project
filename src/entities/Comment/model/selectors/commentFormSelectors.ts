import { StateSchema } from "@/app/providers/StoreProvider"
import { buildSelector } from "@/shared/lib/store"

export const [useCommentFormText, getCommentFormText] = buildSelector(
  (state: StateSchema) => state.commentForm?.text ?? ""
)
export const [useCommentFormError, getCommentFormError] = buildSelector(
  (state: StateSchema) => state.commentForm?.error
)
