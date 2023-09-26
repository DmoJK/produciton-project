import { ReactNode } from "react"

import { ReducersMapObject } from "@reduxjs/toolkit"
import { I18nextProvider } from "react-i18next"
import { MemoryRouter } from "react-router-dom"

import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider"
// eslint-disable-next-line dmojk-plugin/layer-imports-checker
import { ThemeProvider } from "@/app/providers/ThemeProvider"
// eslint-disable-next-line dmojk-plugin/layer-imports-checker
import "@/app/styles/index.scss"
import i18nForTests from "@/shared/config/i18n/i18nForTest"
import { Theme } from "@/shared/const/theme"

export interface ProviderOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  theme?: Theme
}

interface CypressProviderProps {
  children: ReactNode
  options?: ProviderOptions
}

export function CypressProvider(props: CypressProviderProps) {
  const { children, options = {} } = props
  const {
    route = "/",
    initialState,
    asyncReducers,
    theme = Theme.LIGHT,
  } = options
  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}>
          <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>{children}</div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  )
}
