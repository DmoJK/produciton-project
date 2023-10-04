import { Suspense, useEffect } from "react"

import { useUserInited, initAuthData } from "@/entities/User"
import { classNames } from "@/shared/lib/classNames/classNames"
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

  if(!inited) {
    return <PageLoader />
  }

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
