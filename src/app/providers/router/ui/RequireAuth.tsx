import { useMemo } from "react"

import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

import { UserRole, getUserAuthData, getUserRoles } from "@/entities/User"
import { routes } from "@/shared/const/router"

interface RequireAuthProps {
  children: JSX.Element
  roles?: UserRole[]
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
  const auth = useSelector(getUserAuthData)
  const location = useLocation()
  const userRoles = useSelector(getUserRoles)

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true
    }
    return roles.some((requiredRole) => userRoles?.includes(requiredRole))
  }, [roles, userRoles])

  if (!auth) {
    return <Navigate to={routes.MAIN()} state={{ from: location }} replace />
  }

  if (!hasRequiredRoles) {
    return (
      <Navigate to={routes.FORBIDDEN()} state={{ from: location }} replace />
    )
  }
  return children
}
