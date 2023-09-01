import { Story } from "@storybook/react"
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider"
import { articleDetailsReducer } from "@/entities/Article/model/slice/articleDetailsSlice"
import { commentFormReducer } from "@/entities/Comment"
import { loginReducer } from "@/features/AuthByUsername/model/slice/loginSlice"
import { profileReducer } from "@/features/EditableProfileCard"
import { ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"

const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  commentForm: commentFormReducer,
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
