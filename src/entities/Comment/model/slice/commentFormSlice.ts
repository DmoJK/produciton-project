import { PayloadAction } from "@reduxjs/toolkit"

import { buildSlice } from "@/shared/lib/store"

import { CommentFormSchema } from "../types/CommentFormSchema"

const initialState: CommentFormSchema = {
  text: "",
  error: "",
}

export const CommentFormSlice = buildSlice({
  name: "commentForm",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    },
  },
})

export const {
  actions: commentFormActions,
  reducer: commentFormReducer,
  useActions: useCommentFormActions,
} = CommentFormSlice
