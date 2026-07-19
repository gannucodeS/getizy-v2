import { useEffect, useState } from 'react'

export default function Topbar() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`topbar${hidden ? ' topbar--hidden' : ''}`}>
      <div className="container-fluid">
        <div className="topbar__inner">
          <ul className="list-unstyled topbar__info">
            <li>
              <i className="fa-solid fa-location-dot" />
              <a
                href="https://maps.app.goo.gl/RU419bHcAWhNFQqb8"
                target="_blank"
                rel="noreferrer"
              >
                30 Commercial Road Fratton, Australia
              </a>
            </li>
            <li>
              <i className="fa-solid fa-envelope" />
              <a href="mailto:needhelp@company.com">needhelp@company.com</a>
            </li>
          </ul>

          <ul className="list-unstyled topbar__info">
            <li>
              <i className="fa-solid fa-clock" />
              <span>Mon to Sat: 8.00 am - 7.00 pm</span>
            </li>
          </ul>

          <div className="topbar__right topbar__info">
            <div className="topbar__social">
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
      </div>
    </div>
  )
}
