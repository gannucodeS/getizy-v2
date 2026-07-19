import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, isVisible]. Attach ref to an element and toggle an
 * animate.css class once it scrolls into view — a tiny stand-in for the
 * WOW.js "wow fadeInUp" behaviour used throughout the original markup.
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}
