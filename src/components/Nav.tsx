import { useState } from 'react'
import { Burger, Group } from '@mantine/core'
import { SECTIONS } from '../sections'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'

export function Nav() {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)

  return (
    <div id="nav">
      {/* Left-aligned, matching the reference. Hidden above the xs breakpoint. */}
      <Group justify="flex-start">
        <Burger
          id="burger-icon"
          opened={open}
          onClick={() => setOpen((o) => !o)}
          size="sm"
          aria-label="Toggle navigation"
        />
      </Group>
      <Group id="nav-links" justify="center" gap="md" data-open={open}>
        {SECTIONS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? 'selected' : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
        <a href={profile.cv} target="_blank" rel="noreferrer">
          CV
        </a>
      </Group>
    </div>
  )
}
