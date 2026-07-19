import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.js'
import { team } from '../data/content.js'

export default function Team() {
  const [ref, visible] = useReveal(0.1)

  return (
    <section ref={ref} className={`team-one section-space${visible ? ' visible' : ''}`}>
      <div className="team-one__bg__overlay" />
      <div className="container">
        <div className="team-one__content">
          <div className="sec-title text-center">
            <h6 className="sec-title__tagline">
              <i className="fa-solid fa-star" />
              Our Team
            </h6>
            <h2 className="sec-title__title">
              Meet Our Professional
              <br />
              Team Members
            </h2>
          </div>
        </div>

        <div className="team-one__grid">
          {team.map((member) => (
            <div className="team-one__single" key={member.name}>
              <div className="team-one__img">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-one__shape__content">
                <Link to="/team" className="team-one__shape__title">
                  {member.name}
                </Link>
                <span className="team-one__shape__tagline">{member.role}</span>
                <div className="team-one__shape__content__social">
                  <div className="team-one__shape__content__social__icon">
                    <i className="fa-brands fa-pinterest-p" />
                  </div>
                  <div className="team-one__shape__content__social__icon">
                    <i className="fa-brands fa-facebook-f" />
                  </div>
                  <div className="team-one__shape__content__social__icon">
                    <i className="fa-brands fa-twitter" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
