import { useEffect, useState } from "react"

export enum ScrollDirection {
  NONE,
  DOWN,
  UP,
}

export interface UseScrollOptions {
  scrollIntervalMs: number
}

export function useScroll(options?: UseScrollOptions) {
  const interval = options?.scrollIntervalMs ?? 150

  const [scroll, setScroll] = useState(ScrollDirection.NONE)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined
    let pos = window.scrollY
    const onScroll = () => {
      clearTimeout(timer)
      timer = setTimeout(() => setScroll(ScrollDirection.NONE), interval)
      setScroll(pos > window.scrollY ? ScrollDirection.UP : ScrollDirection.DOWN)
      pos = window.scrollY
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer)
    }
  }, [interval])

  return scroll
}