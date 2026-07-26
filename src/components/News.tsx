import { Badge, Divider } from '@mantine/core'
import { news } from '../data/news'
import { ShowMore } from './ShowMore'

export function News() {
  return (
    <div id="update-contain">
      <ShowMore items={news} initial={5} step={5}>
        {(visible) =>
          visible.map((item, i) => (
            <div key={item.date + i}>
              <div className="update">
                <b className="date">{item.date}</b>
                <div>
                  {/* Authored copy, not user input. */}
                  <p dangerouslySetInnerHTML={{ __html: item.html }} />
                  {item.tags.map((tag) => (
                    <Badge key={tag} className="update-tag" variant="light" size="sm" radius="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              {i < visible.length - 1 && <Divider my="sm" />}
            </div>
          ))
        }
      </ShowMore>
    </div>
  )
}
