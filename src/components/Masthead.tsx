import { Card, Group } from '@mantine/core'
import { profile } from '../data/profile'
import { ICONS } from './Icons'

export function Masthead() {
  return (
    <div id="masthead">
      <Card id="prof-pic-contain" padding={0} radius={9999}>
        <img id="prof-pic" src={profile.portrait} alt={profile.name} />
      </Card>

      <div>
        <h1>{profile.name}</h1>
        {profile.affiliation && <p className="affiliation-line">{profile.affiliation}</p>}
        <a className="monospace accent email-link" href={profile.emailHref}>
          {profile.emailDisplay}
        </a>

        {profile.intro.map((paragraph, i) => (
          // Authored copy, not user input — safe to render as HTML so it can carry links.
          <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}

        {/* Icon + label row, sitting below the intro rather than in the corner. */}
        <Group className="icons" gap="lg">
          {profile.links.map((link) => {
            const Icon = ICONS[link.icon]
            return (
              <a
                key={link.label}
                href={link.href}
                title={link.label}
                target="_blank"
                rel="noreferrer"
              >
                <Icon />
                <span>{link.label}</span>
              </a>
            )
          })}
        </Group>
      </div>
    </div>
  )
}
