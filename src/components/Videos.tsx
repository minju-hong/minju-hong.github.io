import { useState } from 'react'
import { embedFor, thumbnailFor, videos, videosIntro, watchFor, type Video } from '../data/videos'

/**
 * Thumbnail on the left, title and notes on the right — the same row rhythm as
 * the publication list. Clicking the thumbnail swaps in the real player, so no
 * YouTube iframes (and no YouTube cookies) load until the reader asks for one.
 */
function VideoRow({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="video-row">
      <div className="video-thumb">
        {playing ? (
          <iframe
            src={embedFor(video.youtubeId)}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button type="button" onClick={() => setPlaying(true)} aria-label={`Play ${video.title}`}>
            <img src={thumbnailFor(video.youtubeId)} alt="" loading="lazy" />
            <span className="play-badge" aria-hidden="true" />
          </button>
        )}
      </div>

      <div className="video-body">
        <a
          className="video-title"
          href={watchFor(video.youtubeId)}
          target="_blank"
          rel="noreferrer"
        >
          {video.title}
        </a>
        <p className="video-performer">{video.performer}</p>
        <p className="video-desc">{video.description}</p>
      </div>
    </div>
  )
}

export function Videos() {
  return (
    <>
      <p>{videosIntro}</p>
      <div id="video-list">
        {videos.map((video) => (
          <VideoRow key={video.youtubeId} video={video} />
        ))}
      </div>
    </>
  )
}
