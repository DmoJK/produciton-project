import { Story } from "@storybook/react"
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider"
import { articleDetailsReducer } from "@/entities/Article/testing"
import { commentFormReducer } from "@/entities/Comment"
import { ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { loginReducer } from "@/features/AuthByUsername/testing"
import { profileReducer } from "@/features/EditableProfileCard/testing"

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
