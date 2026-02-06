import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import searchIndex from '../data/searchIndex'
import './Search.css'

function Search({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  // Focus input when search opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
      setQuery('')
      setResults([])
      setSelectedIndex(0)
    }
  }, [isOpen])

  // Handle search
  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    const searchTerms = query.toLowerCase().split(' ').filter(Boolean)

    const filtered = searchIndex.filter((item) => {
      const searchText = `${item.title} ${item.description} ${item.keywords.join(' ')}`.toLowerCase()
      return searchTerms.every((term) => searchText.includes(term))
    })

    // Group by category
    const grouped = filtered.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = []
      }
      acc[item.category].push(item)
      return acc
    }, {})

    setResults(grouped)
    setSelectedIndex(0)
  }, [query])

  // Get flat list for keyboard navigation
  const getFlatResults = () => {
    return Object.values(results).flat()
  }

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    const flatResults = getFlatResults()

    switch (e.key) {
      case 'Escape':
        onClose()
        break
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % Math.max(flatResults.length, 1))
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + flatResults.length) % Math.max(flatResults.length, 1))
        break
      case 'Enter':
        e.preventDefault()
        if (flatResults[selectedIndex]) {
          navigateToResult(flatResults[selectedIndex])
        }
        break
      default:
        break
    }
  }

  const navigateToResult = (item) => {
    navigate(item.path)
    onClose()
  }

  // Close on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  const flatResults = getFlatResults()
  let currentFlatIndex = 0

  return (
    <div className="search-overlay" onClick={handleBackdropClick}>
      <div className="search-modal">
        <div className="search-header">
          <div className="search-input-wrapper">
            <svg className="search-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              className="search-input"
              placeholder="Search pages, products, services..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            {query && (
              <button className="search-clear" onClick={() => setQuery('')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
          <button className="search-close" onClick={onClose}>
            <span>ESC</span>
          </button>
        </div>

        <div className="search-results">
          {!query && (
            <div className="search-hint">
              <p>Start typing to search across all pages...</p>
              <div className="search-hint-categories">
                <span>For You</span>
                <span>For Business</span>
                <span>Diaspora</span>
                <span>About</span>
              </div>
            </div>
          )}

          {query && flatResults.length === 0 && (
            <div className="search-no-results">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="8" x2="14" y2="14" />
                <line x1="14" y1="8" x2="8" y2="14" />
              </svg>
              <p>No results found for "{query}"</p>
              <span>Try different keywords or browse our menu</span>
            </div>
          )}

          {Object.entries(results).map(([category, items]) => (
            <div key={category} className="search-category">
              <h3 className="search-category-title">{category}</h3>
              <div className="search-category-items">
                {items.map((item) => {
                  const isSelected = currentFlatIndex === selectedIndex
                  const itemIndex = currentFlatIndex
                  currentFlatIndex++

                  return (
                    <button
                      key={item.path}
                      className={`search-result-item ${isSelected ? 'selected' : ''}`}
                      onClick={() => navigateToResult(item)}
                      onMouseEnter={() => setSelectedIndex(itemIndex)}
                    >
                      <div className="search-result-content">
                        <span className="search-result-title">{item.title}</span>
                        <span className="search-result-description">{item.description}</span>
                      </div>
                      <svg className="search-result-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {flatResults.length > 0 && (
          <div className="search-footer">
            <div className="search-footer-hint">
              <span><kbd>↑</kbd><kbd>↓</kbd> to navigate</span>
              <span><kbd>Enter</kbd> to select</span>
              <span><kbd>Esc</kbd> to close</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Search
