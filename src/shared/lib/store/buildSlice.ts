import { useMemo } from "react"

import {
  CreateSliceOptions,
  SliceCaseReducers,
  bindActionCreators,
  createSlice,
} from "@reduxjs/toolkit"

import { useAppDispatch } from "../hooks/useAppDispatch"

export function buildSlice<
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string
>(options: CreateSliceOptions<State, CaseReducers, Name>) {
  const slice = createSlice(options)

  const useActions = (): typeof slice.actions => {
    const dispatch = useAppDispatch()

    // @ts-ignore
    return useMemo(
      // @ts-ignore
      () => bindActionCreators(slice.actions, dispatch),
      [dispatch]
    )
  }

  return {
    ...slice,
    useActions,
  }
}
