import { misc, miscIntro } from '../data/misc'

export function Misc() {
  return (
    <>
      <p>{miscIntro}</p>
      <div id="misc-contain">
        {misc.map((item) => (
          <div key={item.title + item.period} className="misc-item">
            <b className="misc-title">{item.title}</b>
            <span className="misc-period">{item.period}</span>
            <p className="misc-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}
