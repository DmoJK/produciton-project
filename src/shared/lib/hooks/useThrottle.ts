import { useCallback, useEffect, useRef } from "react"

export function useThrottle(callback: (...args: any) => void, delay: number) {
  const throttleRef = useRef(false)
  const timeoutRef = useRef<NodeJS.Timeout | undefined>()

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const throttledCallback = useCallback((...args: any) => {
    if (!throttleRef.current) {
      callback(...args)
      throttleRef.current = true

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
        throttleRef.current = false
      }, delay)
    }
  }, [callback, delay])

  return throttledCallback
}
