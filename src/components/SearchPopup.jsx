import { useState } from 'react'

export default function SearchPopup({ open, onClose }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Hook this up to real search/routing once the site has content to search.
    onClose()
  }

  return (
    <div className={`search-popup${open ? ' active' : ''}`}>
      <div className="search-popup__overlay" onClick={onClose} />
      <div className="search-popup__content">
        <form className="search-popup__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus={open}
          />
          <button type="submit" className="getizy-btn btn-hover-cropping" aria-label="Submit search">
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </form>
      </div>
    </div>
  )
}
