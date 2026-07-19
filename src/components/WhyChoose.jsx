import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.js'
import { whyChooseCards, whyChooseImage } from '../data/content.js'
import { useCountUp } from '../hooks/useCountUp.js'

export default function WhyChoose() {
  const [ref, visible] = useReveal(0.1)
  const [yearsRef, years] = useCountUp(20, { duration: 1200 })
  const [customersRef, customers] = useCountUp(35, { duration: 1200 })

  return (
    <section ref={ref} className={`why-choose-one section-space${visible ? ' visible' : ''}`}>
      <div className="why-choose-one__shapes">
        <div className="body-shape-one" />
        <div className="body-shape-two" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="why-choose-one__wrap">
              <div className="why-choose-one__border" />
              <div className="why-choose-one__experiens">
                <div className="why-chose-one__experiens__one">
                  <div className="why-choose-one__experiens__count" ref={yearsRef}>
                    <h2>{years}</h2>
                    <h2>+</h2>
                  </div>
                  <h5>Year of Experience</h5>
                </div>
                <div className="why-chose-one__experiens__one">
                  <div className="why-choose-one__experiens__count count-two" ref={customersRef}>
                    <h2>{customers}</h2>
                    <h2>k</h2>
                  </div>
                  <h5>Happy Customer</h5>
                </div>
              </div>
              <div className="why-choose-one__image">
                <img src={whyChooseImage} alt="Why choose Getizy" />
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="why-choose-one__content">
              <div className="sec-title">
                <h6 className="sec-title__tagline">
                  <i className="fa-solid fa-star" />
                  Why Choose Us
                </h6>
                <h2 className="sec-title__title">You Should Choose Our Getizy Agency</h2>
              </div>
              <p className="why-choose-one__desc">
                Twenty years of shipping for marketing teams has taught us where projects usually
                go wrong — and how to avoid it from the first kickoff call.
              </p>
              <div className="why-choose-one__cards">
                {whyChooseCards.map((card) => (
                  <div className="why-choose-one__card__single" key={card.title}>
                    <div className="why-choose-one__card__top">
                      <i className={`fa-solid ${card.icon === 'icon-medal' ? 'fa-medal' : 'fa-users'}`} />
                      <h4 className="why-choose-one__card__title">{card.title}</h4>
                    </div>
                    <p className="why-choose-one__card__desc">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <Link to="/about" className="getizy-btn btn-hover-cropping">
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
