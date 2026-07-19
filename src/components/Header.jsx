import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigation } from '../data/navigation.js'
import { brand } from '../data/content.js'

export default function Header({ onOpenMobileNav, onOpenSearch }) {
  const [stuck, setStuck] = useState(false)
  const [topbarHidden, setTopbarHidden] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setStuck(y > 150)
      setTopbarHidden(y > 300)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`main-header sticky-header sticky-header--normal${stuck ? ' scrolled' : ''}`}
      style={{
        position: stuck ? 'sticky' : 'relative',
        top: 0,
        background: stuck ? 'var(--getizy-white)' : 'transparent',
        boxShadow: stuck ? '0 4px 30px rgba(0,0,0,.08)' : 'none',
      }}
    >
      <div className="main-header__container-fluid container-fluid">
        <div className="main-header__inner">
          <div className="main-header__logo">
            <Link to="/">
              <img src={brand.logoDark} alt="Getizy" width="140" />
            </Link>
          </div>

          <div className="main-header__right">
            <div className="main-header__right__inner">
              <div className="main-header__right__left">
                <nav className="main-header__nav main-menu">
                  <ul className="main-menu__list">
                    {navigation.map((item) => (
                      <li
                        key={item.label}
                        className={item.children ? 'dropdown' : undefined}
                      >
                        <NavLink
                          to={item.to}
                          className={({ isActive }) => (isActive ? 'current' : undefined)}
                        >
                          {item.label}
                          {item.children && <i className="fa-solid fa-angle-down" style={{ fontSize: 11 }} />}
                        </NavLink>
                        {item.children && (
                          <ul>
                            {item.children.map((child) => (
                              <li key={child.label}>
                                <NavLink to={child.to}>{child.label}</NavLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="main-header__right__right">
                <Link to="/contact" className="getizy-btn btn-hover-cropping main-header__btn">
                  Contact Us
                </Link>

                <div className="info-item">
                  <a href="tel:+13035550105" className="info-item__btn d-flex align-items-center">
                    <div className="icon">
                      <i className="fa-solid fa-phone" />
                    </div>
                    <div className="content">
                      <span className="content__text">Call Anytime</span>
                      <h6 className="content__call">(303) 555-0105</h6>
                    </div>
                  </a>
                </div>

                <div className="info-item">
                  <button
                    type="button"
                    className="search-toggler info-item__btn"
                    onClick={onOpenSearch}
                    aria-label="Open search"
                    style={{ background: 'none', border: 'none' }}
                  >
                    <i className="fa-solid fa-magnifying-glass" />
                  </button>
                </div>

                <div className="info-item">
                  <Link to="/login" className="info-item__btn">
                    <i className="fa-solid fa-user" />
                  </Link>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="mobile-nav__btn mobile-nav__toggler"
              onClick={onOpenMobileNav}
              aria-label="Open menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
