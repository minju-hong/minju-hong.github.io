import { Group } from '@mantine/core'
import { profile } from '../data/profile'

export function Footer() {
  return (
    <div id="footer">
      <Group justify="center">
        <a className="accent monospace smaller" href={profile.emailHref}>
          {profile.emailDisplay}
        </a>
      </Group>
      <Group justify="center" mt="xs">
        <a className="my-button smaller back-to-top" href="#top">
          Back to top
        </a>
      </Group>
      <p className="credit">
        Template inspired by{' '}
        <a href="https://catherinesyeh.github.io/" target="_blank" rel="noreferrer">
          Catherine Yeh
        </a>
        's wonderful work.
      </p>
    </div>
  )
}
