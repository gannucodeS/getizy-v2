import { useEffect, useRef, useState } from 'react'

export function useCountUp(target, { duration = 1500 } = {}) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const startTime = performance.now()
            const tick = (now) => {
              const progress = Math.min((now - startTime) / duration, 1)
              setValue(Math.floor(progress * target))
              if (progress < 1) requestAnimationFrame(tick)
              else setValue(target)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [target, duration])

  return [ref, value]
}
