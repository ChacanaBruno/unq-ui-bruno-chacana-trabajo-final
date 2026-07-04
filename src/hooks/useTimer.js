import { useEffect } from 'react'

export const useTimer = (isRunning, onTick, intervalMs = 1000) => {
  useEffect(() => {
    if (!isRunning) return

    const intervalId = setInterval(onTick, intervalMs)
    return () => clearInterval(intervalId)
  }, [isRunning, onTick, intervalMs])
}
