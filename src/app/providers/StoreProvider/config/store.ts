import {
  CombinedState,
  configureStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { userReducer } from "@/entities/User"
import { scrollSaverReducer } from "@/widgets/Page"
import { $api } from "@/shared/api/api"
import { rtkApi } from "@/shared/api/rtkApi"
import { createReducerManager } from "./reducerManager"
import { StateSchema, ThunkExtraArg } from "./StateSchema"

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    scrollSaver: scrollSaverReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  }

  const extraArg: ThunkExtraArg = {
    api: $api,
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }).concat(rtkApi.middleware),
  })

  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]
export const useAppDispatch = () => useDispatch<AppDispatch>()
