import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.js'
import { brand, footerGalleryImages } from '../data/content.js'

export default function Footer() {
  const [ref, visible] = useReveal(0.05)
  const [email, setEmail] = useState('')
  const year = new Date().getFullYear()

  return (
    <footer ref={ref} className={`main-footer${visible ? ' visible' : ''}`}>
      <div className="main-footer__bg__overlay" />
      <div className="container">
        <div className="main-footer__wrapper">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="footer-widget main-footer__left">
                <div className="main-footer__logo">
                  <img src={brand.footerLogo} alt="Getizy" />
                </div>
                <p className="main-footer__desc">
                  A full-service marketing agency helping ambitious brands plan, design and ship.
                </p>
                <div className="footer-widget--input">
                  <form
                    className="footer-widget__newsletter"
                    onSubmit={(e) => {
                      e.preventDefault()
                      setEmail('')
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" className="footer-widget__btn btn-hover-cropping">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-2 col-md-6">
              <div className="footer-widget main-footer__navmenu">
                <div className="main-footer__navmenu__title">
                  <h5>Links</h5>
                </div>
                <ul className="main-footer__navmenu__list">
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/team">Meet the Team</Link>
                  </li>
                  <li>
                    <Link to="/project">Our Project</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-6">
              <div className="footer-widget main-footer__navmenu">
                <div className="main-footer__navmenu__title">
                  <h5>Explore</h5>
                </div>
                <ul className="main-footer__navmenu__list">
                  <li>
                    <Link to="/services-grid">What We Offer</Link>
                  </li>
                  <li>
                    <Link to="/blog-grid">Latest News</Link>
                  </li>
                  <li>
                    <Link to="/contact">Help Center</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer-widget main-footer__gallery">
                <div className="main-footer__navmenu__title">
                  <h5>Gallery</h5>
                </div>
                <div className="footer-widget__grid">
                  {footerGalleryImages.map((src) => (
                    <Link
                      to="/gallery"
                      className="footer-widget__grid-item"
                      key={src}
                      style={{ backgroundImage: `url(${src})` }}
                    />
                  ))}
                </div>
                <div className="main-footer__socials">
                  <a href="https://facebook.com" className="social-icon" aria-label="Facebook">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a href="https://twitter.com" className="social-icon" aria-label="Twitter">
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a href="https://pinterest.com" className="social-icon" aria-label="Pinterest">
                    <i className="fa-brands fa-pinterest-p" />
                  </a>
                  <a href="https://youtube.com" className="social-icon" aria-label="YouTube">
                    <i className="fa-brands fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="main-footer__infu">
            <div className="infu">
              <div className="infu__icon">
                <i className="fa-solid fa-phone" />
              </div>
              <div className="infu__link">
                <a href="tel:+13035550105">(303) 555-0105</a>
                <a href="tel:+12195550114">(219) 555-0114</a>
              </div>
            </div>
            <div className="infu">
              <div className="infu__icon">
                <i className="fa-solid fa-globe" />
              </div>
              <div className="infu__link">
                <a href="mailto:needhelp@company.com">needhelp@company.com</a>
                <a href="https://www.company.com">www.company.com</a>
              </div>
            </div>
            <div className="infu">
              <div className="infu__icon">
                <i className="fa-solid fa-location-dot" />
              </div>
              <div className="infu__link">
                <a href="https://maps.app.goo.gl/RU419bHcAWhNFQqb8">
                  30 Commercial Road Fratton, Australia
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-footer__bottom">
        <div className="container">
          <div className="main-footer__bottom__inner">
            <p className="main-footer__copyright">&copy; Copyright {year} by Getizy.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
