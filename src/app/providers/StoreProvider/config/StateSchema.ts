import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit"
import { AxiosInstance } from "axios"
import { ArticleDetailsSchema } from "entities/Article"
import { ArticlesPageSchema } from "pages/ArticlesPage"
import { UserSchema } from "entities/User"
import { LoginSchema } from "features/AuthByUsername"
import { ScrollSaverSchema } from "widgets/Page"
import { rtkApi } from "shared/api/rtkApi"
import { CommentFormSchema } from "entities/Comment"
import { ProfileSchema } from "features/EditableProfileCard"
import { AppDispatch } from "./store"

export interface StateSchema {
  user: UserSchema
  scrollSaver: ScrollSaverSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // ассинхронные редьюсеры
  login?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articlesPage?: ArticlesPageSchema
  commentForm?: CommentFormSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  dispatch: AppDispatch
  state: StateSchema
}
