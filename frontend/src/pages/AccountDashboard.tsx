import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useSavedProducts } from '../contexts/SavedProductsContext';
import styles from './AccountDashboard.module.css';

export default function AccountDashboard() {
  const { user } = useAuth();
  const { savedProducts } = useSavedProducts();
  
  // Get user's skin type and streak from their profile
  const skinType = user?.user_metadata?.skin_type || null;
  const streak = user?.user_metadata?.current_streak || 0;

  const isPro = user?.user_metadata?.role === 'pro';

  return (
    <div className={styles.dashboard}>
      {/* Hero */}
      <div className={styles.hero}>
        <h1>My Account</h1>
        <p>Track your skincare journey and manage your preferences</p>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Account Info */}
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>ACCOUNT INFO</h2>
          
          <div className={styles.infoCard}>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Email</span>
              <span className={styles.infoValue}>{user?.email}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Account Type</span>
              <span className={styles.infoValue}>
                {isPro ? (
                  <span className={styles.proBadge}>
                    <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" style={{ verticalAlign: 'middle', marginRight: '4px' }}>
                      <path d="M248,80a28,28,0,1,0-51.12,15.77l-26.79,33L146,73.4a28,28,0,1,0-36.06,0L85.91,128.74l-26.79-33a28,28,0,1,0-26.6,12L47,194.63A16,16,0,0,0,62.78,208H193.22A16,16,0,0,0,209,194.63l14.47-86.85A28,28,0,0,0,248,80ZM128,40a12,12,0,1,1-12,12A12,12,0,0,1,128,40ZM24,80A12,12,0,1,1,36,92,12,12,0,0,1,24,80ZM193.22,192H62.78L48.86,108.52,81.79,149A8,8,0,0,0,88,152a7.91,7.91,0,0,0,3.27-.71L128,130.13l36.76,21.16A7.91,7.91,0,0,0,168,152a8,8,0,0,0,6.21-3L207.14,108.52ZM220,92a12,12,0,1,1,12-12A12,12,0,0,1,220,92Z"/>
                    </svg>
                    Pro
                  </span>
                ) : (
                  <span className={styles.freeBadge}>Free</span>
                )}
              </span>
            </div>
          </div>
        </section>

        {/* Skin Type */}
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>YOUR SKIN TYPE</h2>
          
          {skinType ? (
            <div className={styles.skinTypeCard}>
              <div className={styles.skinTypeInfo}>
                <h3>{skinType}</h3>
                <p>Based on your quiz results</p>
              </div>
              <Link to="/quiz/skin-type-detector" className={styles.retakeButton}>
                Retake Quiz
              </Link>
            </div>
          ) : (
            <div className={styles.emptyState}>
              <p>You haven't taken the skin type quiz yet</p>
              <Link to="/quiz/skin-type-detector" className={styles.takeQuizButton}>
                Take Skin Type Quiz
              </Link>
            </div>
          )}
        </section>

        {/* Streak (Pro Feature) */}
        {isPro ? (
          <section className={styles.section}>
            <h2 className={styles.sectionLabel}>YOUR STREAK</h2>
            
            <div className={styles.streakCard}>
              <div className={styles.streakNumber}>{streak}</div>
              <p>days in a row</p>
              {streak === 0 && (
                <Link to="/routines/tracker" className={styles.startButton}>
                  Start Your First Routine
                </Link>
              )}
            </div>
          </section>
        ) : (
          <section className={styles.section}>
            <h2 className={styles.sectionLabel}>ROUTINE TRACKING</h2>
            
            <div className={styles.proFeatureCard}>
              <div className={styles.lockIcon}>
                <svg width="32" height="32" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z" opacity="0.2"/>
                  <path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"/>
                </svg>
              </div>
              <h3>Track Your Daily Routine</h3>
              <p>Upgrade to Pro to track your routine completion and build streaks</p>
              <Link to="/pro" className={styles.upgradeButton}>
                Upgrade to Pro
              </Link>
            </div>
          </section>
        )}

        {/* Saved Favorites */}
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>SAVED FAVORITES</h2>
          
          {savedProducts.length > 0 ? (
            <div className={styles.favoritesGrid}>
              <p>You have {savedProducts.length} saved product{savedProducts.length !== 1 ? 's' : ''}</p>
              <Link to="/account/saved" className={styles.viewAllButton}>
                View All
              </Link>
            </div>
          ) : (
            <div className={styles.emptyState}>
              <p>You haven't saved any products yet</p>
              <Link to="/" className={styles.browseButton}>
                Browse Products
              </Link>
            </div>
          )}
        </section>

        {/* Upgrade CTA for Free Users */}
        {!isPro && (
          <section className={styles.upgradeSection}>
            <div className={styles.upgradeCard}>
              <div className={styles.crownIcon}>
                <svg width="48" height="48" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M230.64,73.37,128,128,25.36,73.37a8,8,0,0,0-9,13.39L128,192l111.64-105.24a8,8,0,1,0-9-13.39Z" opacity="0.2"/>
                  <path d="M248,80a28,28,0,1,0-51.12,15.77l-26.79,33L146,73.4a28,28,0,1,0-36.06,0L85.91,128.74l-26.79-33a28,28,0,1,0-26.6,12L47,194.63A16,16,0,0,0,62.78,208H193.22A16,16,0,0,0,209,194.63l14.47-86.85A28,28,0,0,0,248,80ZM128,40a12,12,0,1,1-12,12A12,12,0,0,1,128,40ZM24,80A12,12,0,1,1,36,92,12,12,0,0,1,24,80ZM193.22,192H62.78L48.86,108.52,81.79,149A8,8,0,0,0,88,152a7.91,7.91,0,0,0,3.27-.71L128,130.13l36.76,21.16A7.91,7.91,0,0,0,168,152a8,8,0,0,0,6.21-3L207.14,108.52ZM220,92a12,12,0,1,1,12-12A12,12,0,0,1,220,92Z"/>
                </svg>
              </div>
              <h3>Unlock Pro Features</h3>
              <p>Get daily routine tracking, advanced quizzes, Glow AI, and more</p>
              <Link to="/pro" className={styles.upgradeButtonLarge}>
                Upgrade to Pro
              </Link>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
