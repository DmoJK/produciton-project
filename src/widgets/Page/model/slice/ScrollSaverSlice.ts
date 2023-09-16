import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { ScrollSaverSchema } from "../types/ScrollSaverSchema"

const initialState: ScrollSaverSchema = {
  scroll: {},
}

export const ScrollSaverSlice = createSlice({
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

export const { actions: scrollSaverActions } = ScrollSaverSlice
export const { reducer: scrollSaverReducer } = ScrollSaverSlice
