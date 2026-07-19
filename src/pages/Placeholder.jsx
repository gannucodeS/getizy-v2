import { Link } from 'react-router-dom'

export default function Placeholder({ title }) {
  return (
    <section className="page-header">
      <div className="page-header__bg__overlay" />
      <div className="container">
        <h1 className="page-header__title">{title}</h1>
        <ul className="getizy-breadcrumb list-unstyled">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <span>{title}</span>
          </li>
        </ul>
      </div>
      <div className="container" style={{ paddingTop: 60, textAlign: 'center' }}>
        <p style={{ maxWidth: 560, margin: '0 auto' }}>
          Only the homepage markup was supplied from the original template, so this page is a
          stand-in. Build it out the same way the homepage sections were converted — copy the
          matching HTML section, translate its classes/markup to JSX, and add it as a new
          component under <code>src/components</code>.
        </p>
      </div>
    </section>
  )
}
