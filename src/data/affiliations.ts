/**
 * Affiliation timeline from the current CV. Follows the CV's own framing, which
 * lists the CMU visiting position alongside the degrees rather than separately.
 *
 * Hansung Science High School is omitted: the CV has that entry commented out,
 * which reads as a deliberate choice to leave it off.
 */

export interface Affiliation {
  period: string
  organisation: string
  role: string
  /** Optional extra line, e.g. a location or advisor. */
  detail?: string
  href?: string
}

export const affiliations: Affiliation[] = [
  {
    period: 'May 2026 – Present',
    organisation: 'Carnegie Mellon University',
    role: 'Visiting Researcher, Language Technologies Institute',
    detail: 'Pittsburgh, PA, USA',
    href: 'https://www.lti.cs.cmu.edu/',
  },
  {
    period: 'Mar 2024 – Feb 2026',
    organisation: 'Korea Advanced Institute of Science and Technology (KAIST)',
    role: 'M.Sc. in Electrical Engineering',
    detail: 'Daejeon, Korea · Advisor: Prof. Hye Won Chung',
    href: 'https://ee.kaist.ac.kr/en/',
  },
  {
    period: 'Mar 2019 – Feb 2024',
    organisation: 'Korea Advanced Institute of Science and Technology (KAIST)',
    role: 'B.Sc. in Mathematical Sciences & Electrical Engineering (Double Major)',
    detail: 'Daejeon, Korea · Graduated with Excellence in Leadership and Volunteer Activity',
    href: 'https://www.math.kaist.ac.kr/en/',
  },
  {
    period: 'Apr 2023 – Sep 2023',
    organisation: 'Technical University of Munich',
    role: 'Exchange Student in Mathematics',
    detail: 'Munich, Germany',
    href: 'https://www.tum.de/en/',
  },
]
