import { createSelector } from "@reduxjs/toolkit"

import { getUserAuthData } from "@/entities/User"
import AboutIconDeprecated from "@/shared/assets/icons/about.svg"
import ArticleIconDeprecated from "@/shared/assets/icons/article.svg"
import MainIconDeprecated from "@/shared/assets/icons/main.svg"
import ProfileIconDeprecated from "@/shared/assets/icons/profile.svg"
import ArticleIcon from "@/shared/assets/newIcons/Articles.svg"
import ProfileIcon from "@/shared/assets/newIcons/Avatar.svg"
import MainIcon from "@/shared/assets/newIcons/Home.svg"
import AboutIcon from "@/shared/assets/newIcons/Info.svg"
import { routes } from "@/shared/const/router"
import { toggleFeatures } from "@/shared/lib/features"

import { SidebarItemType } from "../types/sidebar"


export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: routes.MAIN(),
      Icon: toggleFeatures({
        name: "isAppRedesigned",
        on: () => MainIcon,
        off: () => MainIconDeprecated,
      }),
      text: "Главная страница",
    },
    {
      path: routes.ABOUT(),
      Icon: toggleFeatures({
        name: "isAppRedesigned",
        on: () => AboutIcon,
        off: () => AboutIconDeprecated,
      }),
      text: "О сайте",
    },
  ]
  if (userData) {
    sidebarItemsList.push(
      {
        path: routes.PROFILE(userData.id),
        Icon: toggleFeatures({
          name: "isAppRedesigned",
          on: () => ProfileIcon,
          off: () => ProfileIconDeprecated,
        }),
        text: "Профиль",
        authOnly: true,
      },
      {
        path: routes.ARTICLES(),
        Icon: toggleFeatures({
          name: "isAppRedesigned",
          on: () => ArticleIcon,
          off: () => ArticleIconDeprecated,
        }),
        text: "Статьи",
        authOnly: true,
      }
    )
  }
  return sidebarItemsList
})
