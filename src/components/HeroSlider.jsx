import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCarousel } from '../hooks/useCarousel.js'
import { heroSlides, heroShapes } from '../data/content.js'

function HeroSlide({ slide, index, fast, instant }) {
  const [imagesVisible, setImagesVisible] = useState(false)
  const imagesRef = useRef(null)
  const speed = instant ? 0.001 : (fast ? 0.5 : 1)

  useEffect(() => {
    const timer = setTimeout(() => setImagesVisible(true), 400 * speed)
    return () => clearTimeout(timer)
  }, [speed])

  return (
    <>
      <div className="col-xxl-7 col-xl-6 col-lg-12" style={{ '--anim-speed': speed }}>
        <div className="hero-slider-one__content">
          <h5 className="hero-slider-one__sub-title">{slide.subtitle}</h5>
          <h2 className="hero-slider-one__title">
            <span className="hero-slider-one__title__anim">{slide.title[0]}</span>
            <span className="hero-slider-one__title__anim">{slide.title[1]}</span>
            <span className="hero-slider-one__title__anim">
              <span className="solu">{slide.title[2].split(' ')[0]}</span>
              {slide.title[2].split(' ')[1] && (
                <span className="tion"> {slide.title[2].split(' ')[1]}</span>
              )}
            </span>
          </h2>
          <p className="hero-slider-one__text">{slide.text}</p>
          <div className="hero-slider-one__btn">
            <Link to="/about" className="getizy-btn btn-hover-cropping">
              Discover More
            </Link>
            <a
              href="https://www.youtube.com/watch?v=Nh-CtVgQNnA"
              className="hero-video icon-thm-btn"
              target="_blank"
              rel="noreferrer"
              aria-label="Watch our video"
            >
              <span>▶</span>
            </a>
          </div>
        </div>
      </div>

      <div className="col-xxl-5 col-xl-6 col-lg-12" style={{ '--anim-speed': speed }}>
        <div ref={imagesRef} className={`hero-slider-one__images__one${imagesVisible ? ' visible' : ''}`}>
          <img src={slide.image} alt={slide.title.join(' ')} />
          <img
            src={heroShapes.frameAccentOne}
            alt=""
            className="hero-slider-one__images__one__shape__one"
          />
          <img
            src={heroShapes.frameAccentTwo}
            alt=""
            className="hero-slider-one__images__one__shape__two"
          />
          <div className="hero-slider-one__images__one__shape__three">
            <img src={heroShapes.badgeIcon} alt="" width="28" />
            <h4>Satisfied Customers</h4>
          </div>
          <div className="hero-slider-one__title__anim__image">
            <img src={heroShapes.titleSquiggle} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default function HeroSlider() {
  const { index, next, prev, goTo } = useCarousel(heroSlides.length, {
    auto: true,
    interval: 7000,
  })
  const mounted = useRef(false)
  useEffect(() => { mounted.current = true }, [])

  return (
    <section className="hero-slider-one hero-main-slider" id="home">
      <div className="hero-slider-one__bg" />
      <div className="hero-slider-one__shapes">
        <img src={heroShapes.ambientOne} alt="" className="hero-slider-one__shape__one" />
        <img src={heroShapes.ambientTwo} alt="" className="hero-slider-one__shape__two" />
      </div>
      <div className="container">
        <div className="row gutter-y-60 align-items-center" key={index}>
          <HeroSlide slide={heroSlides[index]} index={index} fast={mounted.current} />
        </div>
      </div>

      <div className="hero-slider-one__dots">
        {heroSlides.map((s, i) => (
          <button
            key={s.subtitle}
            type="button"
            className={i === index ? 'active' : undefined}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="hero-slider-one__arrows">
        <button type="button" onClick={prev} aria-label="Previous slide">
          <i className="fa-solid fa-arrow-left" />
        </button>
        <button type="button" onClick={next} aria-label="Next slide">
          <i className="fa-solid fa-arrow-right" />
        </button>
      </div>
    </section>
  )
}
