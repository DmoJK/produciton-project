import { Suspense } from "react"

import { classNames } from "@/shared/lib/classNames/classNames"
import { Loader } from "@/shared/ui/deprecated/Loader"
import { Modal } from "@/shared/ui/deprecated/Modal"

import { LoginFormLazy } from "../LoginForm/LoginForm.lazy"

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal
      className={classNames("", {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginFormLazy onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
}
