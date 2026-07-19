import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.js'
import { services, aboutStats, servicesLogo } from '../data/content.js'
import { useCountUp } from '../hooks/useCountUp.js'

function Counter({ target, suffix }) {
  const [ref, value] = useCountUp(target)
  return (
    <div className="countbar-one">
      <div className="countbar-one__data count-box" ref={ref}>
        <h5 className="countbar-one__text">{value}</h5>
        <h5 className="countbar-one__text">{suffix}</h5>
      </div>
      <span>{target === aboutStats.clients ? 'Satisfied Clients' : 'Projects Completed'}</span>
    </div>
  )
}

export default function Services() {
  const [ref, visible] = useReveal(0.1)

  return (
    <section ref={ref} className={`service-one section-space-top${visible ? ' visible' : ''}`}>
      <div className="service-one__shapes">
        <div className="body-shape-one" />
        <div className="body-shape-two" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            <div className="service-one__card__wrap">
              {services.map((item) => (
                <div className="service-one__card__single" key={item.title}>
                  <div className="service-one__card">
                    <div className="service-one__card__icon">
                      <i className={`fa-solid ${iconFor(item.icon)}`} />
                    </div>
                    <span className="service-one__card__title">{item.title}</span>
                    <p className="service-one__card__desc">{item.desc}</p>
                    <Link to="/service/product-development" className="service-one__card__btn">
                      Read More
                      <div className="service-one__card__arrow">
                        <i className="fa-solid fa-arrow-right" />
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-xl-6 col-lg-8 col-md-12">
            <div className="service-one__content">
              <div className="sec-title">
                <h6 className="sec-title__tagline">
                  <i className="fa-solid fa-star" />
                  Our Service
                </h6>
                <h2 className="sec-title__title">We're Providing Best Service to Clients</h2>
              </div>
              <p className="service-one__desc">
                Website builds, product design and marketing strategy — delivered by one senior
                team so nothing gets lost in translation between vendors.
              </p>
              <div className="service-one__content__eliment">
                <div className="countbar-one__wrap">
                  <Counter target={aboutStats.clients} suffix="K" />
                  <Counter target={aboutStats.projects} suffix="" />
                </div>
                <img
                  src={servicesLogo}
                  alt="Getizy monogram"
                  className="service-one__content__eliment__logo"
                />
              </div>
              <Link to="/services-grid" className="getizy-btn btn-hover-cropping">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function iconFor(name) {
  const map = {
    'icon-code': 'fa-code',
    'icon-palette': 'fa-palette',
    'icon-bullhorn': 'fa-bullhorn',
    'icon-shapes': 'fa-shapes',
  }
  return map[name] || 'fa-star'
}
