import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.js'
import { projects } from '../data/content.js'

export default function Projects() {
  const [ref, visible] = useReveal(0.1)

  return (
    <section ref={ref} className={`project-one${visible ? ' visible' : ''}`}>
      <div className="project-one__shapes">
        <div className="body-shape-one" />
        <div className="body-shape-two" />
      </div>
      <div className="container">
        <div className="sec-title text-center">
          <h6 className="sec-title__tagline">
            <i className="fa-solid fa-star" />
            Latest Project
          </h6>
          <h2 className="sec-title__title">
            Our Recently Completed
            <br />
            Latest Projects
          </h2>
        </div>

        <div className="project-one__grid">
          {projects.map((project) => (
            <Link to="/project" className="project-one__item" key={project.title}>
              <div className="project-one__img">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-one__card">
                <div className="project-one__arrow-icon">
                  <i className="fa-solid fa-arrow-right" />
                </div>
                <div className="project-one__text">
                  <span className="project-one__title">{project.title}</span>
                  <span className="project-one__sub-title">{project.category}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
