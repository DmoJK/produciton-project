import { MutableRefObject, ReactNode, UIEvent, useRef } from "react"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect"
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll"
import { StateSchema } from "app/providers/StoreProvider"
import { useThrottle } from "shared/lib/hooks/useThrottle"
import { scrollSaverActions } from "../../model/slice/ScrollSaverSlice"
import { getScrollByPath } from "../../model/selectors/ScrollSaverSelector"
import cls from "./Page.module.scss"

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = ({ className, children, onScrollEnd }: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const dispatch = useAppDispatch()
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
    dispatch(
      scrollSaverActions.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: pathname,
      })
    )
  }, 500)

  return (
    <main
      ref={wrapperRef}
      onScroll={onScroll}
      className={classNames(cls.Page, {}, [className])}
    >
      {children}
      {onScrollEnd && <div className={cls.trigger} ref={triggerRef} />}
    </main>
  )
}
