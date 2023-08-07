import { Reducer } from "@reduxjs/toolkit"
import { ReduxStoreWithManager } from "app/providers/StoreProvider"
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema"
import { FC, ReactNode, useEffect } from "react"
import { useDispatch, useStore } from "react-redux"

export type ReducersList = {
  [reducerKey in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
  children: ReactNode
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
  children,
  reducers,
  removeAfterUnmount = true,
}) => {
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
