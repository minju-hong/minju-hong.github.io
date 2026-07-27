import { Stack } from '@mantine/core'
import './App.css'
import { Nav } from './components/Nav'
import { Masthead } from './components/Masthead'
import { Section } from './components/Section'
import { News } from './components/News'
import { Research } from './components/Research'
import { Videos } from './components/Videos'
import { Misc } from './components/Misc'
import { Affiliations } from './components/Affiliations'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <Stack id="app" gap={0}>
        <Stack id="home" className="fade-in" gap={0}>
          {/* The masthead *is* the About section, so it carries the anchor
              rather than getting its own heading — matching the reference. */}
          <div className="anchor" id="about" />
          <span id="top" />
          <Masthead />

          <Section id="news" title="News + Updates">
            <News />
          </Section>

          <Section id="research" title="Research ✨">
            <Research />
          </Section>

          <Section id="affiliations" title="Affiliations 🎓">
            <Affiliations />
          </Section>

          <Section id="music" title="Music 🎻">
            <Videos />
          </Section>

          <Section id="misc" title="Miscellaneous 🎪">
            <Misc />
          </Section>
        </Stack>
        <Footer />
      </Stack>
    </>
  )
}
