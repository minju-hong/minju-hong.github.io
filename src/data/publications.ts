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
  /**
   * Venue line. May include light HTML (e.g. `<b>` for the primary venue).
   * Trusted, authored copy — not user input.
   */
  venue: string
  href: string
  links: PubLink[]
  /** Shown in the "Selected" view. */
  selected?: boolean
  /** Highlighted honour line, e.g. a best-paper award. */
  award?: string
  /** Optional one-sentence research summary under the venue. */
  summary?: string
}

/** Rendered bold + underlined wherever it appears in an author list. */
export const authorName = 'Minju Hong'

/** Research blurb paragraphs. `html` is trusted, authored copy — not user input. */
export const researchIntro = [
  'My research interests lie at the intersection of theoretical machine learning, preference learning, and game-theoretic learning. I am particularly interested in how the structure of feedback, strategic interactions, and parameterization affects statistical efficiency, learning guarantees, and the behavior of learning algorithms.',
  'My recent work includes regret analysis for online RLHF under general preferences, convergence and implicit bias of softmax learning dynamics, and personalized preference modeling for pluralistic LLM alignment.',
]

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
 * (a taught course, not research), and a duplicate "Research Intern" entry that
 * listed Prof. Chung alongside Pittsburgh.
 */
export const researchExperience: ResearchPosition[] = [
  {
    organisation: 'Carnegie Mellon University, Language Technologies Institute',
    href: 'https://www.lti.cs.cmu.edu/',
    period: 'May 2026 – Sep 2026',
    role: 'Research Intern — Modeling Subjective Annotations in LLM Alignment',
    description: [
      'Implemented and evaluated latent preference models for capturing heterogeneity in human judgments, using ideal-point representations and pretrained reward models.',
      'Analyzed the structure and interpretability of learned preference spaces, investigating patterns of agreement and disagreement across annotators.',
      'Supervised by Prof. Maarten Sap; mentor: Dr. Vasudha Varadarajan.',
    ],
  },
  {
    organisation: 'OptiML Lab, KAIST AI',
    period: 'Mar 2026 – Present',
    role: 'Research Collaboration — Convergence and Implicit Bias of Softmax Extragradient Dynamics',
    description: [
      'Studied convergence and implicit bias of softmax-parameterized Euclidean extragradient dynamics in bilinear zero-sum games.',
      'Derived sharp asymptotic decay rates for vanishing action probabilities and characterized their dependence on equilibrium margins.',
      'With Prof. Chulhee Yun, Junghyun Lee, and Changmin Kang.',
    ],
  },
  {
    organisation: 'IIDS Lab, KAIST',
    href: 'https://iids.kaist.ac.kr/',
    period: 'Mar 2024 – Feb 2026',
    role: 'Graduate Research Assistant',
    description: [
      'Studied regularized online RLHF under generalized bilinear preference models, including regret analysis for algorithms with general strongly convex regularizers.',
      'Analyzed and adapted regret bounds from prior work, derived an eluder-dimension bound for the preference model, and developed supporting theoretical arguments.',
      'Investigated the effects of example ordering on in-context learning in large language models, with a focus on underlying optimization mechanisms.',
      'Advised by Prof. Hye Won Chung.',
    ],
  },
  {
    organisation: 'Technical University of Munich, Theoretical Foundations of AI Group',
    period: 'Apr 2023 – Sep 2023',
    role: 'Undergraduate Researcher — Information Spread Dynamics in Networks',
    description: [
      'Studied misinformation mitigation in graph networks and developed blocker-selection algorithms to limit information spread.',
      'Advised by Prof. Debarghya Ghoshdastidar.',
    ],
  },
  {
    organisation: 'IIDS Lab, KAIST',
    href: 'https://iids.kaist.ac.kr/',
    period: 'Mar 2021 – Dec 2022',
    role: 'Undergraduate Researcher — Random Graph Matching',
    description: [
      'Studied random graph matching and algorithmic recovery problems for stochastic block models through independent theoretical study.',
      'Advised by Prof. Hye Won Chung.',
    ],
  },
]

export const publications: Publication[] = [
  {
    title:
      'Convergence and Implicit Bias of Softmax Extragradient Flow in Bilinear Zero-Sum Games',
    authors: ['Junghyun Lee*', 'Changmin Kang*', `${authorName}*`, 'Chulhee Yun'],
    venue:
      'Under review at ICLR 2027 · 15th Joint Conference of the Korean Artificial Intelligence Association (JKAIA 2026)',
    href: 'https://openreview.net/forum?id=ZPZ9a2N05X',
    selected: true,
    summary:
      'Studies convergence, sharp asymptotic rates, and implicit bias of extragradient dynamics in softmax-parameterized zero-sum games.',
    links: [{ kind: 'paper', href: 'https://openreview.net/forum?id=ZPZ9a2N05X' }],
  },
  {
    title: 'Provably Efficient Regularized Online RLHF with Generalized Bilinear Preferences',
    authors: ['Junghyun Lee', authorName, 'Kwang-Sung Jun', 'Chulhee Yun', 'Se-Young Yun'],
    venue:
      '<b>NeurIPS 2026</b> · ICML 2026 Workshop on Pluralistic Alignment · 14th Conference of the Korean Artificial Intelligence Association (CKAIA 2026)',
    href: 'https://arxiv.org/abs/2602.23116',
    selected: true,
    award: 'Distinguished Paper Award at CKAIA 2026',
    summary:
      'Establishes regret guarantees for regularized online RLHF under generalized, potentially intransitive preferences.',
    links: [{ kind: 'paper', href: 'https://arxiv.org/abs/2602.23116' }],
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
