import { useReveal } from '../hooks/useReveal.js'
import { features } from '../data/content.js'

function FeatureCard({ item, delay }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`features-one__item reveal-up${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="features-one__card">
        <div className="features-one__card__top__wrap">
          <h3 className="features-one__card__title">{item.title}</h3>
          <p className="features-one__card__desc">{item.desc}</p>
        </div>
        <div className="features-one__card__bottom__wrap">
          <div className="features-one__card__image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="features-one__card__icon">
            <i className="fa-solid fa-star" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  const [ref, visible] = useReveal()

  return (
    <section ref={ref} className={`features-one section-space${visible ? ' visible' : ''}`}>
      <div className="features-one__shapes">
        <div className="body-shape-one" />
        <div className="body-shape-two" />
      </div>
      <div className="container">
        <div className="row gutter-y-80">
          {features.map((item, i) => (
            <div className="col-lg-4 col-md-6" key={item.title}>
              <FeatureCard item={item} delay={i * 120} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
