import { PayloadAction } from "@reduxjs/toolkit"

import { buildSlice } from "@/shared/lib/store"

import { ScrollSaverSchema } from "../types/ScrollSaverSchema"

const initialState: ScrollSaverSchema = {
  scroll: {},
}

export const ScrollSaverSlice = buildSlice({
  name: "ScrollSaverSlice",
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      { payload }: PayloadAction<{ path: string; position: number }>
    ) => {
      state.scroll[payload.path] = payload.position
    },
  },
})

export const {
  actions: scrollSaverActions,
  reducer: scrollSaverReducer,
  useActions: useScrollSaverActions,
} = ScrollSaverSlice
