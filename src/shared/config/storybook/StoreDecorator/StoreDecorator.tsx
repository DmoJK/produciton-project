import { Story } from "@storybook/react"
import { StateSchema, StoreProvider } from "app/providers/StoreProvider"
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice"
import { profileReducer } from "entities/Profile"
import { addCommentFormReducer } from "features/AddCommentForm/model/slice/addCommentFormSlice"
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice"
import { ArticleDetailsCommentsReducer } from "pages/ArticleDetailsPage/model/slice/ArticleDetailsCommentsSlice"
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"

const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsComments: ArticleDetailsCommentsReducer,
}

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (Story: Story) => {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <Story />
      </StoreProvider>
    )
  }
