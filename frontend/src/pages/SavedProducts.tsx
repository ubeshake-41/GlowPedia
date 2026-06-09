import { Link } from 'react-router-dom';
import { useSavedProducts } from '../contexts/SavedProductsContext';
import { products } from '../data/products';
import styles from './SavedProducts.module.css';

export default function SavedProducts() {
  const { savedProducts, removeSavedProduct } = useSavedProducts();
  
  // Get the actual product data for saved product slugs
  const savedProductData = products.filter(product => 
    savedProducts.includes(product.slug)
  );

  return (
    <div className={styles.savedProductsPage}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1>Saved Products</h1>
        <p>Your collection of favorite products</p>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {savedProductData.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>❤️</div>
            <h2>No saved products yet</h2>
            <p>Browse products and tap the heart icon to save them here</p>
            <Link to="/" className={styles.browseButton}>
              Browse Products
            </Link>
          </div>
        ) : (
          <div className={styles.productsGrid}>
            {savedProductData.map(product => (
              <div key={product.slug} className={styles.productCard}>
                <div className={styles.cardHeader}>
                  <div 
                    className={styles.categoryBadge} 
                    style={{
                      background: product.category === 'skincare' 
                        ? 'var(--color-accent-subtle)' 
                        : 'var(--color-lavender-light)',
                      color: product.category === 'skincare' 
                        ? 'var(--color-accent)' 
                        : 'var(--color-lavender)'
                    }}
                  >
                    {product.category}
                  </div>
                   <button 
                     className={styles.unsaveButton}
                     onClick={() => removeSavedProduct(product.slug)}
                     aria-label="Unsave product"
                   >
                     ❤️
                   </button>
                </div>
                <h3>{product.name}</h3>
                <p className={styles.productDescription}>{product.short_description}</p>
                <Link 
                  to={`/product/${product.slug}`} 
                  className={styles.viewDetailsButton}
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}