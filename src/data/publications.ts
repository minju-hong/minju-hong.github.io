/** Research content from the client's current CV. */

export type LinkKind = 'paper' | 'website' | 'demo' | 'code' | 'video' | 'slides'

export interface PubLink {
  kind: LinkKind
  href: string
}

export interface Publication {
  title: string
  /** Author list. The client's own name is matched against `authorName` below. */
  authors: string[]
  venue: string
  href: string
  links: PubLink[]
  /** Shown in the "Selected" view. */
  selected?: boolean
  /** Highlighted honour line, e.g. a best-paper award. */
  award?: string
}

/** Rendered bold + underlined wherever it appears in an author list. */
export const authorName = 'Minju Hong'

export const researchIntro =
  'My research is on the theoretical foundations of RLHF, preference learning and pluralistic LLM alignment, and optimization dynamics in games.'

export interface ResearchPosition {
  organisation: string
  href?: string
  period: string
  role: string
  /** Bullet points shown under the role. */
  description: string[]
}

/**
 * Merged from the CV's "Selected Research Projects" and "Research Experience",
 * which overlap. Reverse-chronological, one entry per position.
 *
 * Two CV entries are intentionally left out: the MAS467 course term project
 * (a taught course, not research), and a "Research Intern, May–Sep 2026"
 * entry that duplicates the graduate-assistant bullets and lists Prof. Chung
 * alongside Pittsburgh — it reads like a copy-paste slip. Worth a check.
 */
export const researchExperience: ResearchPosition[] = [
  {
    organisation: 'Carnegie Mellon University, Language Technologies Institute',
    href: 'https://www.lti.cs.cmu.edu/',
    period: 'May 2026 – Present',
    role: 'Visiting Researcher — Modeling Subjective Annotations in LLM Alignment',
    description: [
      'Investigating methods for representing subjective human annotations and annotator disagreement. Supervised by Prof. Maarten Sap, mentored by Dr. Vasudha Varadarajan.',
    ],
  },
  {
    organisation: 'OptiML Lab, KAIST AI',
    period: 'Mar 2026 – Present',
    role: 'Research Collaboration — Implicit Bias of Softmax Dynamics',
    description: [
      'Studying equilibrium selection and last-iterate behavior of softmax-parameterized dynamics. With Prof. Chulhee Yun, Changmin Kang, and Junghyun Lee.',
    ],
  },
  {
    organisation: 'IIDS Lab, KAIST',
    href: 'https://iids.kaist.ac.kr/',
    period: 'Mar 2024 – Feb 2026',
    role: 'Graduate Research Assistant',
    description: [
      'M.S. research on regularized online RLHF under generalized bilinear preference models, contributing regret analyses for regularized self-play algorithms.',
      'Investigated the theoretical foundations of order sensitivity in in-context learning. Advised by Prof. Hye Won Chung.',
    ],
  },
  {
    organisation: 'Theoretical Foundations of AI Group, TU Munich',
    period: 'Apr 2023 – Sep 2023',
    role: 'Undergraduate Researcher — Information Spread Dynamics',
    description: [
      'Studied misinformation mitigation on graph networks, developing and evaluating blocker selection algorithms. Advised by Prof. Debarghya Ghoshdastidar.',
    ],
  },
  {
    organisation: 'IIDS Lab, KAIST',
    href: 'https://iids.kaist.ac.kr/',
    period: 'Mar 2021 – Dec 2022',
    role: 'Undergraduate Researcher — Random Graph Matching',
    description: [
      'Independent study on random graph theory, investigating algorithmic strategies for matching in stochastic block models. Advised by Prof. Hye Won Chung.',
    ],
  },
]

export const publications: Publication[] = [
  {
    title: 'Provably Efficient Regularized Online RLHF with Generalized Bilinear Preferences',
    authors: ['Junghyun Lee', authorName, 'Kwang-Sung Jun', 'Chulhee Yun', 'Se-Young Yun'],
    venue: 'ICML 2026 Workshop on Pluralistic Alignment · CKAIA 2026',
    href: 'https://arxiv.org/abs/2602.23116',
    selected: true,
    links: [
      { kind: 'paper', href: 'https://arxiv.org/abs/2602.23116' },
      { kind: 'code', href: 'https://github.com/minju-hong' },
    ],
  },
]

/** Teaching assistantships, all at KAIST. */
export const teaching = [
  { course: 'Machine Learning Basics and Practices (EE214)', term: 'Fall 2025' },
  { course: 'Probability and Introductory Random Processes (EE210)', term: 'Spring 2025' },
  {
    course: 'EE Career Design (EE215)',
    term: 'Spring & Fall 2025',
    note: 'Provided simultaneous Korean–English interpretation for an international course.',
  },
]
