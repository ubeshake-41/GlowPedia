import { useLocation, useNavigate, Link } from 'react-router-dom';
import { products } from '../data/products';
import type { QuizResult as QuizResultType } from '../data/quizzes';
import styles from './QuizResult.module.css';

export default function QuizResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const { result } = location.state as { result: QuizResultType };

  if (!result) {
    navigate('/quizzes');
    return null;
  }

  return (
    <div className={styles.quizResult}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.successIcon}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h1>Your Result: <span>{result.title}</span></h1>
          <p className={styles.description}>{result.description}</p>
        </div>
      </div>

      {/* Recommendations */}
      <div className={styles.content}>
        {/* Routine Impact Section */}
        {result.routineImpact && (
          <section className={styles.impactSection}>
            <h2 className={styles.sectionLabel}>HOW THIS AFFECTS YOUR ROUTINE</h2>
            <p className={styles.impactText}>{result.routineImpact}</p>
          </section>
        )}

        {/* Look For / Avoid Section */}
        {(result.lookFor || result.avoid) && (
          <section className={styles.guidanceSection}>
            <div className={styles.guidanceGrid}>
              {result.lookFor && (
                <div className={styles.guidanceCard} style={{ borderLeftColor: 'var(--color-success)' }}>
                  <div className={styles.guidanceHeader}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <h3>Look For</h3>
                  </div>
                  <ul className={styles.guidanceList}>
                    {result.lookFor.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {result.avoid && (
                <div className={styles.guidanceCard} style={{ borderLeftColor: 'var(--color-error)' }}>
                  <div className={styles.guidanceHeader}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="15" y1="9" x2="9" y2="15"/>
                      <line x1="9" y1="9" x2="15" y2="15"/>
                    </svg>
                    <h3>Avoid</h3>
                  </div>
                  <ul className={styles.guidanceList}>
                    {result.avoid.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>RECOMMENDED FOR YOU</h2>
          <p className={styles.sectionSubtitle}>
            Based on your answers, here are the products that will work best for you
          </p>

          <div className={styles.recommendations}>
            {result.recommendations.map((rec, index) => {
              const product = products.find(p => p.slug === rec.productSlug);
              if (!product) return null;

              return (
                <Link
                  key={index}
                  to={`/product/${product.slug}`}
                  className={styles.productCard}
                >
                  <div className={styles.productHeader}>
                    <div className={styles.productBadge} style={{
                      background: product.category === 'skincare' 
                        ? 'var(--color-accent-subtle)' 
                        : 'var(--color-lavender-light)',
                      color: product.category === 'skincare' 
                        ? 'var(--color-accent)' 
                        : 'var(--color-lavender)'
                    }}>
                      {product.category}
                    </div>
                    <h3>{product.name}</h3>
                  </div>
                  <p className={styles.productReason}>{rec.reason}</p>
                  <div className={styles.productCta}>
                    Learn more →
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Soft Sign-Up Prompt */}
        <section className={styles.signUpPrompt}>
          <div className={styles.promptContent}>
            <h3>Want to save your results?</h3>
            <p>Create a free account to save your quiz results, bookmark favorite products, and keep your personalized routines.</p>
            <div className={styles.benefitsList}>
              <div className={styles.benefit}>
                <span className={styles.benefitIcon}>
                  <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z" opacity="0.2"/>
                    <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16h8V136a8,8,0,0,1,8-8H80V88a8,8,0,0,1,8-8h32V40a8,8,0,0,1,8-8h72a8,8,0,0,1,8,8V200h8A8,8,0,0,1,232,208ZM136,48V200h56V48ZM96,96v104h24V96Zm-40,48v56H80V144Z"/>
                  </svg>
                </span>
                <span>Save quiz results & history</span>
              </div>
              <div className={styles.benefit}>
                <span className={styles.benefitIcon}>
                  <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/>
                  </svg>
                </span>
                <span>Bookmark favorite products</span>
              </div>
              <div className={styles.benefit}>
                <span className={styles.benefitIcon}>
                  <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2"/>
                    <path d="M224,48H32a8,8,0,0,0-8,8V208a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM40,112H80v48H40Zm56,0H216v48H96ZM216,64V96H40V64ZM40,208V176H216v32Z"/>
                  </svg>
                </span>
                <span>Save personalized routines</span>
              </div>
            </div>
            <div className={styles.promptActions}>
              <Link to="/auth/signup" className={styles.signUpButton}>
                Create Free Account
              </Link>
              <Link to="/" className={styles.skipButton}>
                Maybe later
              </Link>
            </div>
          </div>
        </section>

        {/* Actions */}
        <div className={styles.actions}>
          <Link to="/quizzes" className={styles.secondaryButton}>
            Take Another Quiz
          </Link>
          <Link to="/" className={styles.primaryButton}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
