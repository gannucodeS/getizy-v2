import { useReveal } from '../hooks/useReveal.js'
import { testimonials, clientLogos } from '../data/content.js'
import { useCarousel } from '../hooks/useCarousel.js'

export default function Testimonials() {
  const [ref, visible] = useReveal(0.1)
  const { index, next, prev } = useCarousel(testimonials.length, {
    auto: true,
    interval: 6500,
  })
  const t = testimonials[index]

  return (
    <section ref={ref} className={`testimonials-one section-space${visible ? ' visible' : ''}`}>
      <div className="testimonials-one__inner">
        <div className="container">
          <div className="testimonials-one__carousel">
            <div className="testimonials-one__carousel__item" key={index}>
              <div className="testimonials-one__carousel__item__image">
                <img src={t.image} alt={t.name} />
                <div className="quite icon-thm-btn">
                  <i className="fa-solid fa-quote-right" />
                </div>
              </div>
              <div className="testimonials-one__carousel__item__content">
                <div className="testimonials-one__carousel__item__content__top">
                  <div className="testimonials-one__carousel__item__content__author">
                    <span className="testimonials-one__carousel__item__content__author__name">
                      {t.name}
                    </span>
                    <p className="testimonials-one__carousel__item__content__author__deganation">
                      {t.role}
                    </p>
                  </div>
                  <div className="testimonials-one__carousel__item__content__ratings">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <i className="fa-solid fa-star" key={i} />
                    ))}
                  </div>
                </div>
                <p className="testimonials-one__carousel__item__content__text">"{t.quote}"</p>
              </div>
            </div>

            <div className="testimonials-one__nav">
              <button type="button" onClick={prev} aria-label="Previous testimonial">
                <i className="fa-solid fa-arrow-left" />
              </button>
              <button type="button" onClick={next} aria-label="Next testimonial">
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>

        <div className="client-carousel">
          <div className="client-carousel__inner">
            <div className="container">
              <div className="client-carousel__one">
                <div className="client-carousel__one__track">
                  {clientLogos.map((logo, i) => (
                    <div className="client-carousel__one__item" key={i}>
                      <img src={logo} alt={`Client logo ${i + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
