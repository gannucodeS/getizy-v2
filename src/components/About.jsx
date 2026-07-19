import { Link } from 'react-router-dom'
import { aboutImages } from '../data/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function About() {
  const [imgRef, imgVisible] = useReveal(0.1)
  const [contentRef, contentVisible] = useReveal(0.1)

  return (
    <section className="about-one section-space">
      <div className="about-one__bg" />
      <div className="about-one__shapes">
        <div className="body-shape-one" />
        <div className="body-shape-two" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div ref={imgRef} className={`about-one__images${imgVisible ? ' visible' : ''}`}>
              <div className="about-one__img__one">
                <img src={aboutImages.imageOne} alt="Inside the Getizy studio" />
              </div>
              <div className="about-one__img__two">
                <img src={aboutImages.imageTwo} alt="The team collaborating" />
              </div>
              <div className="about-one__logo__icon">
                <img src={aboutImages.logoBadge} alt="Getizy monogram" />
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div ref={contentRef} className={`about-one__wrapper${contentVisible ? ' visible' : ''}`}>
              <div className="about-one__content">
                <div className="sec-title">
                  <h6 className="sec-title__tagline">
                    <i className="fa-solid fa-star" />
                    About us
                  </h6>
                  <h2 className="sec-title__title">Discover the World Marketing Agency</h2>
                </div>

                <div className="about-one__content__desc">
                  Getizy has spent the last decade helping ambitious brands turn strategy into
                  sites, campaigns and products people actually use — with a small senior team
                  instead of a rotating cast of juniors.
                </div>

                <div className="about-one__content__eliment">
                  <div className="about-one__content__eliment__img">
                    <img src={aboutImages.consultationIcon} alt="Free consultation" />
                  </div>
                  <div className="about-one__content__eliment__content">
                    <h3 className="about-one__content__eliment__title">Free Consultation</h3>
                    <p className="about-one__content__eliment__desc">
                      Tell us the goal — we'll tell you honestly if we're the right fit.
                    </p>
                  </div>
                </div>

                <ul className="about-one__content__list">
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    Senior strategists on every account
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    Transparent, fixed-scope pricing
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    Results reviewed monthly, not just at kickoff
                  </li>
                </ul>

                <Link to="/about" className="getizy-btn btn-hover-cropping">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
