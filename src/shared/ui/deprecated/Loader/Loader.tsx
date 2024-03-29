/* eslint-disable react/self-closing-comp */
import { classNames } from "@/shared/lib/classNames/classNames"
import "./Loader.scss"

interface LoaderProps {
  className?: string
}

/**
 * use redesigned ui components
 * @deprecated
 */

export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={classNames("lds-ellipsis", {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
