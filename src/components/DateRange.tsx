/**
 * Renders a date label as up to two deliberate lines, breaking after a
 * separator instead of wherever the column happens to run out:
 *
 *   "Mar. 2024 – Present"  ->  "Mar. 2024 –" / "Present"
 *   "Spring & Fall 2025"   ->  "Spring &"    / "Fall 2025"
 *
 * The separator stays glued to the first line by a non-breaking space — with a
 * normal space the browser takes the break opportunity there and strands the
 * "–" or "&" alone on its own line, which is what looked wrong originally.
 *
 * A label with no separator renders unchanged on one line. Note this is a
 * cosmetic improvement only: the guarantee that a date can never spill into the
 * next column comes from the `minmax(..., max-content)` grid columns in
 * App.css, not from this split.
 */
const SEPARATORS = ['–', '&']

export function DateRange({ value }: { value: string }) {
  const separator = SEPARATORS.find((candidate) => value.includes(candidate))

  if (separator) {
    const at = value.indexOf(separator)
    const head = value.slice(0, at).trim()
    const tail = value.slice(at + separator.length).trim()

    if (head && tail) {
      return (
        <b className="date">
          <span className="date-part">
            {head}&nbsp;{separator}
          </span>
          <span className="date-part">{tail}</span>
        </b>
      )
    }
  }

  return <b className="date">{value}</b>
}
