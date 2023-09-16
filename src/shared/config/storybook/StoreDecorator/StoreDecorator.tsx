import { Story } from "@storybook/react"

import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider"
import { articleDetailsReducer } from "@/entities/Article/testing"
// eslint-disable-next-line dmojk-plugin/layer-imports-checker
import { commentFormReducer } from "@/entities/Comment"
import { loginReducer } from "@/features/AuthByUsername/testing"
import { profileReducer } from "@/features/EditableProfileCard/testing"
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
