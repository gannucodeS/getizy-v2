import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Minimal carousel state machine — replaces the jQuery Owl Carousel usage
 * from the original template with plain React state. No external slider
 * library required.
 */
export function useCarousel(length, { auto = false, interval = 6000 } = {}) {
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)

  const goTo = useCallback(
    (i) => setIndex(((i % length) + length) % length),
    [length]
  )
  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (!auto || length <= 1) return undefined
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % length)
    }, interval)
    return () => clearInterval(timerRef.current)
  }, [auto, interval, length])

  return { index, next, prev, goTo }
}
