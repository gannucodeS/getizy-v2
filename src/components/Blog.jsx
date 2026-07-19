import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.js'
import { blogPosts } from '../data/content.js'

export default function Blog() {
  const [ref, visible] = useReveal(0.1)

  return (
    <section ref={ref} className={`blog-one section-space${visible ? ' visible' : ''}`}>
      <div className="container">
        <div className="sec-title text-center">
          <h6 className="sec-title__tagline">
            <i className="fa-solid fa-star" />
            Articles
          </h6>
          <h3 className="sec-title__title">
            Latest News &amp; Articles from
            <br />
            the Blog Posts
          </h3>
        </div>

        <div className="blog-one__grid">
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.title}>
              <div className="blog-card__image">
                <div className="blog-card__image-item">
                  <img src={post.image} alt={post.title} />
                </div>
              </div>
              <div className="blog-card__content">
                <div className="blog-card__date">
                  <h2 className="blog-card__date__month">{post.day}</h2>
                  <span className="blog-card__date__year">{post.month}</span>
                </div>
                <div className="blog-card__meta">
                  <div className="author-img">
                    <img src={post.avatar} alt={post.author} />
                  </div>
                  <div className="blog-card__content-author">
                    <h6 className="author-name">{post.author}</h6>
                    <span className="author-title">Admin</span>
                  </div>
                </div>
                <h3 className="blog-card__title">
                  <Link to="/blog-details">{post.title}</Link>
                </h3>
                <Link to="/blog-details" className="getizy-btn btn-hover-cropping getizy-btn--black">
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
