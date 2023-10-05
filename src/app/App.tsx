import { Suspense, useEffect } from "react"

import { useUserInited, initAuthData } from "@/entities/User"
import { MainLayout } from "@/shared/layouts"
import { classNames } from "@/shared/lib/classNames/classNames"
import { ToggleFeaturesComponents } from "@/shared/lib/features"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch"
import { Navbar } from "@/widgets/Navbar"
import { PageLoader } from "@/widgets/PageLoader"
import { Sidebar } from "@/widgets/Sidebar"

import { AppRouter } from "./providers/router"

export const App = () => {
  const inited = useUserInited()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initAuthData())
  }, [dispatch])

  if (!inited) {
    return <PageLoader />
  }

  return (
    <ToggleFeaturesComponents
      feature="isAppRedesigned"
      on={
        <div className={classNames("app_redesigned", {}, [])}>
          <Suspense fallback="">
            <MainLayout
              header={<Navbar />}
              content={<AppRouter />}
              sidebar={<Sidebar />}
              toolbar={<div>123</div>}
            />
          </Suspense>
        </div>
      }
      off={
        <div className={classNames("app", {}, [])}>
          <Suspense fallback="">
            <Navbar />
            <div className="content-page">
              <Sidebar />
              <AppRouter />
            </div>
          </Suspense>
        </div>
      }
    />
  )
}
