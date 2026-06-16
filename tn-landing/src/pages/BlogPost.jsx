import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getBlogPost } from '../data/blogPosts'
import '../components/PageStyles.css'

function BlogPost() {
  const { slug } = useParams()
  const post = getBlogPost(slug)

  if (!post) {
    return (
      <div className="page-container">
        <Header />
        <section className="content-section white-section" style={{ marginTop: '72px' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="section-label">Article</span>
            <h1 style={{ color: '#111827', marginBottom: '1rem' }}>Blog post not found</h1>
            <Link to="/media-centre" className="cta-btn cta-btn-primary">
              Back to Media Centre
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="page-container">
      <Header />

      <section
        className="page-hero"
        style={{
          backgroundImage: `url(${post.image})`,
          minHeight: '430px',
        }}
      >
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content" style={{ maxWidth: '900px' }}>
          <span className="section-label">{post.category}</span>
          <h1>{post.title}</h1>
          <p>
            {post.date} | {post.readTime}
          </p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/media-centre">Media Centre</Link>
          <span className="separator">/</span>
          <span className="current">{post.category}</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <article className="blog-article">
            <p className="blog-article-lead">{post.excerpt}</p>

            {post.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <div className="blog-gallery" aria-label="Rebranding exercise photos">
            {post.gallery.map((image) => (
              <figure key={image.src}>
                <img src={image.src} alt={image.alt} />
              </figure>
            ))}
          </div>

          <div style={{ marginTop: '3rem' }}>
            <Link to="/media-centre" className="cta-btn cta-btn-secondary">
              Back to Media Centre
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BlogPost
