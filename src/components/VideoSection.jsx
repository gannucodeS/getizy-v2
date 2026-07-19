import { useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'
import { videoImage } from '../data/content.js'

export default function VideoSection() {
  const [ref, visible] = useReveal(0.1)
  const [playing, setPlaying] = useState(false)

  return (
    <section ref={ref} className={`video-one section-space${visible ? ' visible' : ''}`}>
      <div className="video-one__bg__overlay" />
      <div className="container">
        <div className="video-one__content">
          <div className="video-one__image">
            {playing ? (
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Nh-CtVgQNnA?autoplay=1"
                title="Getizy showreel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <img src={videoImage} alt="Getizy showreel thumbnail" />
                <button
                  type="button"
                  className="video-one__icon"
                  onClick={() => setPlaying(true)}
                  aria-label="Play video"
                >
                  <i className="fa-solid fa-play" />
                </button>
              </>
            )}
          </div>
          <h2 className="video-one__title">
            Great Things in Business are Never Done By One Person. They're Done by a Team
          </h2>
        </div>
      </div>
    </section>
  )
}
