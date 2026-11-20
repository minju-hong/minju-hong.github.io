// import { useState } from 'react'
import { Group, UnstyledButton } from '@mantine/core'
import {
  authorName,
  publications,
  researchExperience,
  researchIntro,
  teaching,
  type Publication,
} from '../data/publications'
import { PUB_LINKS } from './Icons'
import { DateRange } from './DateRange'

function isOwnAuthor(author: string) {
  return author.replace(/\*+$/, '') === authorName
}

/** Bolds and underlines the client's own name within the author list. */
function Authors({ authors }: { authors: string[] }) {
  const equalContribution = authors.some((author) => author.includes('*'))

  return (
    <>
      <p className="pub-authors">
        {authors.map((author, i) => (
          <span key={author + i}>
            {i > 0 && ', '}
            {isOwnAuthor(author) ? <b className="own-name">{author}</b> : author}
          </span>
        ))}
      </p>
      {equalContribution && <p className="pub-footnote">* Equal contribution</p>}
    </>
  )
}

function PubRow({ pub }: { pub: Publication }) {
  return (
    <div className="pub-row">
      <a className="pub-title" href={pub.href} target="_blank" rel="noreferrer">
        {pub.title}
      </a>
      <Authors authors={pub.authors} />
      {/* Venue may include authored HTML (e.g. bold primary venue). */}
      <p className="pub-venue" dangerouslySetInnerHTML={{ __html: pub.venue }} />
      {pub.award && (
        <p className="pub-award">
          <span aria-hidden="true">🏅</span> {pub.award}
        </p>
      )}
      {pub.summary && <p className="pub-summary">{pub.summary}</p>}
      <Group className="pub-links" gap="xs">
        {pub.links.map((link) => {
          const { icon: Icon, label } = PUB_LINKS[link.kind]
          return (
            <a
              key={link.kind}
              className="link-pill"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              <Icon />
              {label}
            </a>
          )
        })}
      </Group>
    </div>
  )
}

export function Research() {
  // Selected / All filter — kept for easy restoration.
  // const [view, setView] = useState<'selected' | 'all'>('selected')
  // const shown = view === 'selected' ? publications.filter((p) => p.selected) : publications
  const shown = publications

  return (
    <>
      {researchIntro.map((paragraph, i) => (
        <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
      ))}

      <Group className="pub-toggle" gap="xs">
        <UnstyledButton className="toggle-button" data-active="true">
          Publications
        </UnstyledButton>
        {/*
        {(['selected', 'all'] as const).map((option) => (
          <UnstyledButton
            key={option}
            className="toggle-button"
            data-active={view === option}
            onClick={() => setView(option)}
          >
            {option === 'selected' ? 'Selected' : 'All'}
          </UnstyledButton>
        ))}
        */}
      </Group>

      <div id="pubs">
        {shown.map((pub) => (
          <PubRow key={pub.title} pub={pub} />
        ))}
      </div>

      <h3 className="section-subheader experience-header">Research Experience 🔬</h3>
      <div id="experience-contain">
        {researchExperience.map((post) => (
          <div key={post.organisation + post.period} className="update">
            <DateRange value={post.period} />
            <div>
              <p className="affiliation-org">
                {post.href ? (
                  <a className="affiliation-link" href={post.href} target="_blank" rel="noreferrer">
                    {post.organisation}
                  </a>
                ) : (
                  post.organisation
                )}
              </p>
              <p className="affiliation-role">{post.role}</p>
              <ul className="experience-bullets">
                {post.description.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <h3 className="section-subheader experience-header">Teaching 👩🏻‍🏫</h3>
      <div id="teaching-contain">
        {teaching.map((entry) => (
          <div key={entry.course} className="update">
            <DateRange value={entry.term} />
            <div>
              <p className="affiliation-org">{entry.course}</p>
              <p className="affiliation-role">Teaching Assistant, KAIST</p>
              {'note' in entry && entry.note && (
                <p className="affiliation-detail">{entry.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
