import { createSelector } from "@reduxjs/toolkit"

import { getUserAuthData } from "@/entities/User"
import AboutIcon from "@/shared/assets/icons/about.svg"
import ArticleIcon from "@/shared/assets/icons/article.svg"
import MainIcon from "@/shared/assets/icons/main.svg"
import ProfileIcon from "@/shared/assets/icons/profile.svg"
import { routes } from "@/shared/const/router"

import { SidebarItemType } from "../types/sidebar"

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: routes.MAIN(),
      Icon: MainIcon,
      text: "Главная страница",
    },
    {
      path: routes.ABOUT(),
      Icon: AboutIcon,
      text: "О сайте",
    },
  ]
  if (userData) {
    sidebarItemsList.push(
      {
        path: routes.PROFILE(userData.id),
        Icon: ProfileIcon,
        text: "Профиль",
        authOnly: true,
      },
      {
        path: routes.ARTICLES(),
        Icon: ArticleIcon,
        text: "Статьи",
        authOnly: true,
      }
    )
  }
  return sidebarItemsList
})
