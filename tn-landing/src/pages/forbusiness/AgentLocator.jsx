import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { agentLocations, getUniqueTowns } from '../../data/agentLocations'
import '../../components/PageStyles.css'
import '../About.css'

function AgentLocator() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTown, setSelectedTown] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  const towns = useMemo(() => getUniqueTowns(), [])

  const filteredAgents = useMemo(() => {
    const query = searchQuery.toLowerCase().trim()
    return agentLocations.filter(agent => {
      const matchesSearch = !query ||
        agent.name.toLowerCase().includes(query) ||
        agent.location.toLowerCase().includes(query) ||
        agent.town.toLowerCase().includes(query)

      const matchesTown = !selectedTown || agent.town === selectedTown

      return matchesSearch && matchesTown
    })
  }, [searchQuery, selectedTown])

  const totalPages = Math.ceil(filteredAgents.length / itemsPerPage)
  const paginatedAgents = filteredAgents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  const handleTownFilter = (e) => {
    setSelectedTown(e.target.value)
    setCurrentPage(1)
  }

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedTown('')
    setCurrentPage(1)
  }

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Find an Agent</h1>
          <p>Locate a TN CyberTech Bank agent near you</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <Link to="/for-business/agents">Agency Banking</Link>
          <span className="separator">/</span>
          <span className="current">Find an Agent</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/for-business/agents" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Agency Banking
          </Link>

          {/* Search and Filter Section */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.1) 0%, rgba(174, 106, 6, 0.05) 100%)',
            border: '2px solid rgba(255, 222, 74, 0.3)',
            borderRadius: '24px',
            padding: '2rem',
            marginBottom: '2rem',
          }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ color: '#111827', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Search Agents</h2>
              <p style={{ color: '#6b7280', fontSize: '0.9375rem' }}>
                Find TN CyberTech Bank agents by name, location, or town
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem',
              maxWidth: '800px',
              margin: '0 auto',
            }}>
              {/* Search Input */}
              <div style={{ position: 'relative' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '20px',
                  height: '20px',
                }}>
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Search by name or location..."
                  value={searchQuery}
                  onChange={handleSearch}
                  style={{
                    width: '100%',
                    padding: '1rem 1rem 1rem 3rem',
                    fontSize: '1rem',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {/* Town Filter */}
              <div style={{ position: 'relative' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '20px',
                  height: '20px',
                  pointerEvents: 'none',
                }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <select
                  value={selectedTown}
                  onChange={handleTownFilter}
                  style={{
                    width: '100%',
                    padding: '1rem 1rem 1rem 3rem',
                    fontSize: '1rem',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    outline: 'none',
                    backgroundColor: '#fff',
                    cursor: 'pointer',
                    appearance: 'none',
                    boxSizing: 'border-box',
                  }}
                >
                  <option value="">All Towns/Cities</option>
                  {towns.map(town => (
                    <option key={town} value={town}>{town}</option>
                  ))}
                </select>
                <svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '16px',
                  height: '16px',
                  pointerEvents: 'none',
                }}>
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </div>
            </div>

            {/* Results count and clear button */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              marginTop: '1.5rem',
              flexWrap: 'wrap',
            }}>
              <span style={{
                color: '#4b5563',
                fontSize: '0.875rem',
                background: '#fff',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                border: '1px solid #e5e7eb',
              }}>
                <strong style={{ color: 'rgb(174, 106, 6)' }}>{filteredAgents.length}</strong> agents found
              </span>
              {(searchQuery || selectedTown) && (
                <button
                  onClick={clearFilters}
                  style={{
                    background: 'none',
                    border: '1px solid #e5e7eb',
                    borderRadius: '20px',
                    padding: '0.5rem 1rem',
                    fontSize: '0.875rem',
                    color: '#6b7280',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '14px', height: '14px' }}>
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {/* Agent Cards Grid */}
          {paginatedAgents.length > 0 ? (
            <>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.25rem',
                marginBottom: '2rem',
              }}>
                {paginatedAgents.map((agent, index) => (
                  <div key={`${agent.name}-${index}`} style={{
                    background: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                    }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 100%)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5" style={{ width: '24px', height: '24px' }}>
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h3 style={{
                          color: '#111827',
                          fontSize: '1rem',
                          fontWeight: '600',
                          marginBottom: '0.5rem',
                          lineHeight: '1.4',
                        }}>
                          {agent.name}
                        </h3>
                        <p style={{
                          color: '#6b7280',
                          fontSize: '0.875rem',
                          lineHeight: '1.5',
                          marginBottom: '0.75rem',
                        }}>
                          {agent.location}
                        </p>
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.375rem',
                          background: 'rgba(174, 106, 6, 0.1)',
                          color: 'rgb(174, 106, 6)',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          padding: '0.375rem 0.75rem',
                          borderRadius: '20px',
                        }}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '12px', height: '12px' }}>
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                          </svg>
                          {agent.town}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                }}>
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    style={{
                      padding: '0.75rem 1rem',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      background: currentPage === 1 ? '#f9fafb' : '#fff',
                      color: currentPage === 1 ? '#9ca3af' : '#4b5563',
                      cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.875rem',
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px' }}>
                      <polyline points="15 18 9 12 15 6"/>
                    </svg>
                    Previous
                  </button>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                  }}>
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum
                      if (totalPages <= 5) {
                        pageNum = i + 1
                      } else if (currentPage <= 3) {
                        pageNum = i + 1
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i
                      } else {
                        pageNum = currentPage - 2 + i
                      }
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          style={{
                            width: '40px',
                            height: '40px',
                            border: currentPage === pageNum ? 'none' : '1px solid #e5e7eb',
                            borderRadius: '8px',
                            background: currentPage === pageNum ? 'rgb(174, 106, 6)' : '#fff',
                            color: currentPage === pageNum ? '#fff' : '#4b5563',
                            cursor: 'pointer',
                            fontSize: '0.875rem',
                            fontWeight: currentPage === pageNum ? '600' : '400',
                          }}
                        >
                          {pageNum}
                        </button>
                      )
                    })}
                  </div>

                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    style={{
                      padding: '0.75rem 1rem',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      background: currentPage === totalPages ? '#f9fafb' : '#fff',
                      color: currentPage === totalPages ? '#9ca3af' : '#4b5563',
                      cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.875rem',
                    }}
                  >
                    Next
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px' }}>
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              background: '#f9fafb',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" style={{ width: '48px', height: '48px', margin: '0 auto 1rem' }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <h3 style={{ color: '#4b5563', fontSize: '1.125rem', marginBottom: '0.5rem' }}>No agents found</h3>
              <p style={{ color: '#9ca3af', fontSize: '0.9375rem' }}>
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={clearFilters}
                style={{
                  marginTop: '1rem',
                  background: 'rgb(174, 106, 6)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.75rem 1.5rem',
                  fontSize: '0.9375rem',
                  cursor: 'pointer',
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-section light-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1rem', color: '#111827' }}>
            Become an Agent
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Interested in becoming a TN CyberTech Bank agent? Contact our Agency Banking team to learn more.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:AgencyPartnerships@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
              Email Agency Team
            </a>
            <Link to="/for-business/agents/about" className="cta-btn cta-btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AgentLocator
