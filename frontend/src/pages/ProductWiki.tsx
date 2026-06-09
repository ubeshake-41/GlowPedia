import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useState } from 'react';
import { useSavedProducts } from '../contexts/SavedProductsContext';
import styles from './ProductWiki.module.css';

export default function ProductWiki() {
  const { slug } = useParams<{ slug: string }>();
  const [isExpanded, setIsExpanded] = useState(false);
  const { isProductSaved, toggleSavedProduct } = useSavedProducts();
  
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h1>Product not found</h1>
        <p>We couldn't find that product. Try searching for something else.</p>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    );
  }

  const accentColor = product.category === 'skincare' ? 'var(--color-accent)' : 'var(--color-lavender)';

  return (
    <div className={styles.productWiki}>
      {/* Hero Banner */}
      <div className={styles.hero} style={{ borderLeftColor: accentColor }}>
        <div className={styles.heroContent}>
          <div className={styles.categoryBadge} style={{ 
            background: product.category === 'skincare' ? 'var(--color-accent-subtle)' : 'var(--color-lavender-light)',
            color: accentColor
          }}>
            {product.category}
          </div>
          <h1>{product.name}</h1>
          <p className={styles.shortDesc}>{product.short_description}</p>
          <button 
            className={styles.saveButton}
            onClick={() => toggleSavedProduct(product.slug)}
            aria-label={isProductSaved(product.slug) ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isProductSaved(product.slug) ? '❤️' : '🤍'} {/* Heart icon - filled if saved, outlined if not */}
            <span>{isProductSaved(product.slug) ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Expandable Detailed Breakdown */}
        <div className={styles.accordion}>
          <button 
            className={styles.accordionButton}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span>See Detailed Breakdown</span>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms ease' }}
            >
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>

          {isExpanded && (
            <div className={styles.accordionContent}>
              <div className={styles.detailSection}>
                <h3>What is {product.name}?</h3>
                <p>{product.full_description}</p>
              </div>

              <div className={styles.detailSection}>
                <h3>Key Ingredients</h3>
                <ul className={styles.ingredientList}>
                  {product.ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.detailSection}>
                <h3>How to Use</h3>
                <div className={styles.howToUse}>
                  {product.how_to_use.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>

              {product.subtypes && product.subtypes.length > 0 && (
                <div className={styles.detailSection}>
                  <h3>Types of {product.name}</h3>
                  <ul className={styles.subtypeList}>
                    {product.subtypes.map((subtype, i) => (
                      <li key={i}>{subtype}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Good For / Avoid If */}
        <div className={styles.tagsSection}>
          <div className={styles.tagColumn}>
            <h3 className={styles.tagHeading}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              Good For
            </h3>
            <div className={styles.tags}>
              {product.good_for.map((item, i) => (
                <span key={i} className={styles.tagGood}>{item}</span>
              ))}
            </div>
          </div>

          <div className={styles.tagColumn}>
            <h3 className={styles.tagHeading}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="15" y1="9" x2="9" y2="15"/>
                <line x1="9" y1="9" x2="15" y2="15"/>
              </svg>
              Avoid If
            </h3>
            <div className={styles.tags}>
              {product.avoid_if.map((item, i) => (
                <span key={i} className={styles.tagAvoid}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Top 3 Picks */}
        <div className={styles.topPicks}>
          <h2>Top 3 Picks</h2>
          <p className={styles.topPicksSubtitle}>Beginner-friendly recommendations to get you started</p>
          
          <div className={styles.picksList}>
            {product.top_picks.map((pick, i) => (
              <div key={i} className={styles.pickCard}>
                <div className={styles.pickHeader}>
                  <span className={styles.pickNumber}>#{i + 1}</span>
                  <div>
                    <h4>{pick.brand}</h4>
                    <p className={styles.pickName}>{pick.name}</p>
                  </div>
                </div>
                <div className={styles.pickDetails}>
                  <div className={styles.pickInfo}>
                    <span className={styles.pickLabel}>Price</span>
                    <span className={styles.pickValue}>{pick.price_range}</span>
                  </div>
                  <div className={styles.pickInfo}>
                    <span className={styles.pickLabel}>Best for</span>
                    <span className={styles.pickValue}>{pick.best_for}</span>
                  </div>
                </div>
                <a 
                  href={pick.buy_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.buyButton}
                >
                  View Product
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Facts & Pro Tips */}
        <div className={styles.sidePanels}>
          <div className={styles.panel}>
            <h3>Quick Facts</h3>
            <ul>
              <li><strong>Category:</strong> {product.category}</li>
              <li><strong>Type:</strong> {product.subcategory}</li>
              <li><strong>When to use:</strong> {product.category === 'skincare' ? 'Morning & Night' : 'As needed'}</li>
            </ul>
          </div>

          <div className={styles.panel} style={{ borderLeftColor: 'var(--color-yellow)' }}>
            <h3>
              <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor" style={{ verticalAlign: 'middle', marginRight: '8px' }}>
                <path d="M128,56a72,72,0,1,0,72,72A72,72,0,0,0,128,56Z" opacity="0.2"/>
                <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"/>
              </svg>
              Pro Tip
            </h3>
            <p>
              {product.category === 'skincare' 
                ? `Always patch test new ${product.name.toLowerCase()} products on a small area first. Wait 24 hours to check for any reactions before using on your whole face.`
                : `Less is more! Start with a small amount of ${product.name.toLowerCase()} and build up if needed. You can always add more, but you can't take it away.`
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
