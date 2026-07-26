/** Renders the offset anchor plus the accent-barred heading. */
export function Section({
  id,
  title,
  className,
  children,
}: {
  id: string
  title: string
  className?: string
  children?: React.ReactNode
}) {
  return (
    <section className={className}>
      <div className="anchor" id={id} />
      <h2>{title}</h2>
      {children}
    </section>
  )
}
