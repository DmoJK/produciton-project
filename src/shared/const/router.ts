export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  ARTICLES = "articles",
  ARTICLE_DETAILS = "article_details",
  ARTICLE_CREATE = "article_create",
  ARTICLE_EDIT = "article_edit",
  ADMIN_PANEL = "admin_panel",
  FORBIDDEN = "forbidden",
  // last
  NOT_FOUND = "not_found",
}
export const routes = {
  MAIN: () => "/",
  ABOUT: () => "/about",
  PROFILE: (id: string) => `/profile/${id}`,
  ARTICLES: () => "/articles",
  ARTICLE_DETAILS: (id: string) => `/articles/${id}`,
  ARTICLE_CREATE: () => "/articles/new",
  ARTICLE_EDIT: (id: string) => `/articles/${id}/edit`,
  ADMIN_PANEL: () => "/admin",
  FORBIDDEN: () => "/forbidden",
  NOT_FOUND: () => "*",
}
