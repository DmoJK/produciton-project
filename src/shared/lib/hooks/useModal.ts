import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"

interface useModalProps {
  onClose?: () => void
  isOpen?: boolean
  animationDelay?: number
}

/**
 * Переиспользуемый хук для модальных компонентов (drawer/modal)
 * @param animationDelay - задрежка анимации
 * @param onClose - колбэк, срабатывающий при закрытии модального окна
 * @param isOpen - состояние, отвечающие за то, открыта модальное окно или нет
 * @returns 
 */

export function useModal({
  animationDelay,
  isOpen,
  onClose,
}: useModalProps) {
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, animationDelay)
    }
  }, [onClose, animationDelay])

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close()
      }
    },
    [close]
  )

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isOpen, onKeyDown])

  return {
    isClosing,
    isMounted,
    close
  }
}
