import { ReactNode } from "react"

import { classNames, Mods } from "@/shared/lib/classNames/classNames"
import { useModal } from "@/shared/lib/hooks/useModal"

import cls from "./Modal.module.scss"

import { Overlay } from "../Overlay/Overlay"
import { Portal } from "../Portal/Portal"

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

/**
 * use redesigned ui components
 * @deprecated
 */

export const Modal = ({
  className,
  children,
  isOpen,
  onClose,
  lazy,
}: ModalProps) => {
  const { close, isClosing, isMounted } = useModal({
    animationDelay: 300,
    onClose,
    isOpen,
  })
  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  )
}
