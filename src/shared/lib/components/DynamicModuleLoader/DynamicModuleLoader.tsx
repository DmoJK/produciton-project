import { ReactNode, useEffect } from "react"

import { Reducer } from "@reduxjs/toolkit"
import { useDispatch, useStore } from "react-redux"

import { StateSchema, StateSchemaKey, ReduxStoreWithManager } from "@/app/providers/StoreProvider"

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

interface DynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
  children: ReactNode
}

export const DynamicModuleLoader = ({
  children,
  reducers,
  removeAfterUnmount = true,
}: DynamicModuleLoaderProps) => {
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap()

    Object.entries(reducers).forEach(([reducerKey, reducer]) => {
      const mounted = mountedReducers[reducerKey as StateSchemaKey]
      if (!mounted) {
        store.reducerManager.add(reducerKey as StateSchemaKey, reducer)
        dispatch({ type: `@INIT ${reducerKey} reducer` })
      }
    })
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([reducerKey]) => {
          store.reducerManager.remove(reducerKey as StateSchemaKey)
          dispatch({ type: `@DESTROY ${reducerKey} reducer` })
        })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>
}
