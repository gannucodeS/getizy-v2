import { useState } from 'react'
import { Link } from 'react-router-dom'
import { navigation } from '../data/navigation.js'
import { brand } from '../data/content.js'

export default function MobileNav({ open, onClose }) {
  const [expanded, setExpanded] = useState(() => new Set())

  const toggle = (label) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(label)) next.delete(label)
      else next.add(label)
      return next
    })
  }

  return (
    <div className={`mobile-nav__wrapper${open ? ' expanded' : ''}`}>
      <div className="mobile-nav__overlay" onClick={onClose} />
      <div className="mobile-nav__content">
        <button type="button" className="mobile-nav__close" onClick={onClose} aria-label="Close menu">
          <i className="fa fa-times" />
        </button>

        <div className="logo-box">
          <Link to="/" onClick={onClose}>
            <img src={brand.logoLight} width="150" alt="Getizy" style={{ height: 'auto' }} />
          </Link>
        </div>

        <div className="mobile-nav__container">
          <ul className="main-menu__list">
            {navigation.map((item) => (
              <li key={item.label}>
                <a
                  onClick={(e) => {
                    if (item.children) {
                      e.preventDefault()
                      toggle(item.label)
                    } else {
                      onClose()
                    }
                  }}
                  href={item.to}
                >
                  {item.label}
                  {item.children && (
                    <button
                      type="button"
                      className={`submenu-toggle${expanded.has(item.label) ? ' expanded' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        toggle(item.label)
                      }}
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <i className="fa fa-angle-down" />
                    </button>
                  )}
                </a>
                {item.children && (
                  <ul style={{ display: expanded.has(item.label) ? 'block' : 'none' }}>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link to={child.to} onClick={onClose}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope" />
            <a href="mailto:needhelp@company.com">needhelp@company.com</a>
          </li>
          <li>
            <i className="fa fa-phone-alt" />
            <a href="tel:+13035550105">(303) 555-0105</a>
          </li>
        </ul>

        <div className="mobile-nav__social">
          <a href="https://facebook.com" aria-label="Facebook">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://pinterest.com" aria-label="Pinterest">
            <i className="fab fa-pinterest-p" />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
    </div>
  )
}
