import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import styles from './CategoryPage.module.css';

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  
  // Filter products by category
  const categoryProducts = products.filter(p => p.category === category);
  
  // Get category info
  const categoryInfo = {
    skincare: {
      title: 'Skincare',
      description: 'Everything you need to know about skincare products',
      color: 'var(--color-accent)'
    },
    cosmetics: {
      title: 'Cosmetics',
      description: 'Explore makeup and beauty products',
      color: 'var(--color-lavender)'
    }
  };

  const info = categoryInfo[category as keyof typeof categoryInfo];

  if (!info) {
    return (
      <div className={styles.notFound}>
        <h1>Category not found</h1>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className={styles.categoryPage}>
      {/* Hero Section */}
      <div className={styles.hero} style={{ borderLeftColor: info.color }}>
        <div className={styles.heroContent}>
          <div className={styles.categoryBadge} style={{ 
            background: category === 'skincare' ? 'var(--color-accent-subtle)' : 'var(--color-lavender-light)',
            color: info.color
          }}>
            {info.title}
          </div>
          <h1>{info.title}</h1>
          <p>{info.description}</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className={styles.content}>
        <div className={styles.productsGrid}>
          {categoryProducts.map(product => (
            <Link
              key={product.slug}
              to={`/product/${product.slug}`}
              className={styles.productCard}
              style={{ borderLeftColor: info.color }}
            >
              <div className={styles.cardHeader}>
                <h3>{product.name}</h3>
                <div className={styles.categoryLabel} style={{ 
                  background: category === 'skincare' ? 'var(--color-accent-subtle)' : 'var(--color-lavender-light)',
                  color: info.color
                }}>
                  {product.subcategory}
                </div>
              </div>
              <p className={styles.cardDescription}>{product.short_description}</p>
              <div className={styles.cardCta}>
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
