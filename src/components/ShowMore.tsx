import { useState } from 'react'
import { Group, UnstyledButton } from '@mantine/core'

/**
 * Progressive reveal, matching the reference's behaviour: render `initial`
 * items, then reveal `step` more per click until the list is exhausted.
 * "Show Less" restores the list to the initial count.
 */
export function ShowMore<T>({
  items,
  initial = 8,
  step = 8,
  children,
}: {
  items: T[]
  initial?: number
  step?: number
  children: (visible: T[]) => React.ReactNode
}) {
  const [shown, setShown] = useState(initial)
  const visible = items.slice(0, shown)
  const remaining = items.length - shown
  const expanded = shown > initial

  return (
    <>
      {children(visible)}
      {(remaining > 0 || expanded) && (
        <Group justify="center" mt="md" gap="sm">
          {remaining > 0 && (
            <UnstyledButton
              className="my-button show-more"
              onClick={() => setShown((s) => Math.min(s + step, items.length))}
            >
              Show More
            </UnstyledButton>
          )}
          {expanded && (
            <UnstyledButton
              className="my-button show-more"
              onClick={() => setShown(initial)}
            >
              Show Less
            </UnstyledButton>
          )}
        </Group>
      )}
    </>
  )
}
