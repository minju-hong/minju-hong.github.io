import { Divider } from '@mantine/core'
import { affiliations } from '../data/affiliations'
import { DateRange } from './DateRange'

/** Same two-column rhythm as the news list: period on the left, detail on the right. */
export function Affiliations() {
  return (
    <div id="affiliation-contain">
      {affiliations.map((item, i) => (
        <div key={item.organisation + item.period}>
          <div className="update">
            <DateRange value={item.period} />
            <div>
              <p className="affiliation-org">
                {item.href ? (
                  <a className="affiliation-link" href={item.href} target="_blank" rel="noreferrer">
                    {item.organisation}
                  </a>
                ) : (
                  item.organisation
                )}
              </p>
              <p className="affiliation-role">{item.role}</p>
              {item.detail && <p className="affiliation-detail">{item.detail}</p>}
            </div>
          </div>
          {i < affiliations.length - 1 && <Divider my="sm" />}
        </div>
      ))}
    </div>
  )
}
