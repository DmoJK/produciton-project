import { UserRole } from "@/entities/User"
import { AboutPage } from "@/pages/AboutPage"
import { AdminPanelPage } from "@/pages/AdminPanelPage"
import { ArticleDetailsPage } from "@/pages/ArticleDetailsPage"
import { ArticleEditPage } from "@/pages/ArticleEditPage"
import { ArticlesPage } from "@/pages/ArticlesPage"
import { ForbiddenPage } from "@/pages/ForbiddenPage"
import { MainPage } from "@/pages/MainPage"
import { NotFoundPage } from "@/pages/NotFoundPage"
import { ProfilePage } from "@/pages/ProfilePage"
import { AppRoutes, routes } from "@/shared/const/router"
import { AppRoutesProps } from "@/shared/types/router"

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: routes.MAIN(),
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: routes.ABOUT(),
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: routes.PROFILE(":id"),
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: routes.ARTICLES(),
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: routes.ARTICLE_DETAILS(":id"),
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: routes.ARTICLE_CREATE(),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: routes.ARTICLE_EDIT(":id"),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: routes.ADMIN_PANEL(),
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.MANAGER, UserRole.ADMIN],
  },
  [AppRoutes.FORBIDDEN]: {
    path: routes.FORBIDDEN(),
    element: <ForbiddenPage />,
  },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: routes.NOT_FOUND(),
    element: <NotFoundPage />,
  },
}
