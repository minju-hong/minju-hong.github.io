import { createTheme, type MantineColorsTuple } from '@mantine/core'

/**
 * Single-hue palette built from #2C6602, mixed toward white. The source colour
 * sits at index 7 rather than the conventional 6 so `primaryShade` matches the
 * value used for filled components (white text needs 6.98:1, which it has).
 */
const forest: MantineColorsTuple = [
  '#f2f6f0', '#e1eadc', '#c4d4b8', '#a2bc90', '#80a367',
  '#5f8b3f', '#41751b', '#2c6602', '#1f4701', '#143000',
]

/**
 * Mantine spacing, radius and breakpoint defaults are left untouched on purpose:
 * the reference layout was built on them, so overriding would break the
 * prop-for-prop mapping we transcribe from it.
 */
export const theme = createTheme({
  fontFamily: 'Noto Sans, sans-serif',
  fontFamilyMonospace: 'monospace',
  headings: { fontFamily: 'Noto Sans, sans-serif' },
  colors: { forest },
  primaryColor: 'forest',
  primaryShade: 7,
})
