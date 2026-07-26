import { FaGithub, FaLinkedin, FaXTwitter, FaHouse, FaMusic, FaCode } from 'react-icons/fa6'
import { SiGooglescholar } from 'react-icons/si'
import { MdEmail, MdSlideshow } from 'react-icons/md'
import { HiDocument, HiDocumentText } from 'react-icons/hi2'
import { BsCameraVideoFill } from 'react-icons/bs'
import type { SocialLink } from '../data/profile'
import type { LinkKind } from '../data/publications'

export const ICONS: Record<SocialLink['icon'], React.ComponentType> = {
  cv: HiDocument,
  email: MdEmail,
  scholar: SiGooglescholar,
  linkedin: FaLinkedin,
  x: FaXTwitter,
  github: FaGithub,
}

/** Icon + label for each publication link pill. */
export const PUB_LINKS: Record<LinkKind, { icon: React.ComponentType; label: string }> = {
  paper: { icon: HiDocumentText, label: 'Paper' },
  website: { icon: FaHouse, label: 'Website' },
  demo: { icon: FaMusic, label: 'Demo' },
  code: { icon: FaCode, label: 'Code' },
  video: { icon: BsCameraVideoFill, label: 'Video' },
  slides: { icon: MdSlideshow, label: 'Slides' },
}
