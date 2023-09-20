import { Suspense, useEffect } from "react"

import { useUserInited, useUserActions } from "@/entities/User"
import { classNames } from "@/shared/lib/classNames/classNames"
import { Navbar } from "@/widgets/Navbar"
import { Sidebar } from "@/widgets/Sidebar"

import { AppRouter } from "./providers/router"

export const App = () => {
  const { initAuthData } = useUserActions()
  const inited = useUserInited()

  useEffect(() => {
    initAuthData()
  }, [initAuthData])

  return (
    <div className={classNames("app", {}, [])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  )
}
