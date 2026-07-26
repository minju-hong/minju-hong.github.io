import { useEffect, useState } from 'react'
import { SECTIONS } from '../sections'

/** Distance below the fixed nav at which a section counts as "current". */
const ACTIVATION_OFFSET = 120

/** Highlights the nav link for whichever section the reader is currently in. */
export function useActiveSection() {
  const [active, setActive] = useState<string>(SECTIONS[0].id)

  useEffect(() => {
    const onScroll = () => {
      const scrollBottom = window.scrollY + window.innerHeight
      const atBottom = scrollBottom >= document.documentElement.scrollHeight - 2

      // The final section is usually shorter than a viewport, so it can never
      // be scrolled up past the activation offset. Without this, the last nav
      // item would never highlight no matter how far the reader scrolls.
      if (atBottom) {
        setActive(SECTIONS[SECTIONS.length - 1].id)
        return
      }

      // Otherwise: the last section whose anchor has passed under the nav wins.
      const current = SECTIONS.reduce<string>((found, { id }) => {
        const el = document.getElementById(id)
        if (!el) return found
        return el.getBoundingClientRect().top <= ACTIVATION_OFFSET ? id : found
      }, SECTIONS[0].id)
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return active
}
