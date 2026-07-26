import { useState } from 'react'
import { Group, UnstyledButton } from '@mantine/core'

/**
 * Progressive reveal, matching the reference's behaviour: render `initial`
 * items, then reveal `step` more per click until the list is exhausted.
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

  return (
    <>
      {children(visible)}
      {remaining > 0 && (
        <Group justify="center" mt="md">
          <UnstyledButton
            className="my-button show-more"
            onClick={() => setShown((s) => s + step)}
          >
            Show More
          </UnstyledButton>
        </Group>
      )}
    </>
  )
}
