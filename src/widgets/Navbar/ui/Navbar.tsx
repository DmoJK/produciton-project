import { useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { Modal } from "shared/ui/Modal/Modal"
import cls from "./Navbar.module.scss"

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const {t} = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onToggleModal}>
        {t("Войти")}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {/* eslint-disable-next-line */}
        {/* eslint-disable-next-line */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor suscipit
        quas inventore veniam id doloribus, saepe et odit nobis magnam sequi
        incidunt impedit possimus, quis aliquid, eaque consequatur vitae nulla.
      </Modal>
    </div>
  )
}
