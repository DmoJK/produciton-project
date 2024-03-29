import { MutableRefObject, ReactNode, UIEvent, useRef } from "react"

import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

import { StateSchema } from "@/app/providers/StoreProvider"
import { classNames } from "@/shared/lib/classNames/classNames"
import { toggleFeatures } from "@/shared/lib/features"
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll"
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect"
import { useThrottle } from "@/shared/lib/hooks/useThrottle"
import { TestProps } from "@/shared/types/tests"

import cls from "./Page.module.scss"

import { getScrollByPath } from "../../model/selectors/ScrollSaverSelector"
import { useScrollSaverActions } from "../../model/slice/ScrollSaverSlice"

interface PageProps extends TestProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = ({
  className,
  children,
  onScrollEnd,
  dataTestId,
}: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const { setScrollPosition } = useScrollSaverActions()
  const { pathname } = useLocation()
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollByPath(state, pathname)
  )

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  })

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  })

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: pathname,
    })
  }, 500)

  return (
    <main
      ref={wrapperRef}
      onScroll={onScroll}
      className={classNames(
        toggleFeatures({
          name: "isAppRedesigned",
          on: () => cls.PageRedesigned,
          off: () => cls.Page,
        }),
        {},
        [className]
      )}
      data-testid={dataTestId ?? "Page"}
    >
      {children}
      {onScrollEnd && <div className={cls.trigger} ref={triggerRef} />}
    </main>
  )
}
