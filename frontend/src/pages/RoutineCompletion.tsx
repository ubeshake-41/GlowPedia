import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { products } from '../data/products';
import { supabase } from '../lib/supabase';
import styles from './RoutineCompletion.module.css';

const CELEBRATION_MESSAGES = [
  "Amazing work! 🌟",
  "You're glowing! ✨",
  "Routine complete! 🎉",
  "Looking fresh! 🫧",
  "All set! ✅"
];

export default function RoutineCompletion() {
  const { user } = useAuth();
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  
  const message = CELEBRATION_MESSAGES[Math.floor(Math.random() * CELEBRATION_MESSAGES.length)];
  
  // Random product recommendation
  const recommendedProduct = products[Math.floor(Math.random() * products.length)];

  // Load current streak from user profile
  useEffect(() => {
    if (!user?.id) return;
    
    const loadStreak = async () => {
      try {
        const { data, error } = await supabase
          .from('users')
          .select('current_streak')
          .eq('id', user.id)
          .single();
        
        if (error) {
          console.error('Error loading streak:', error);
          // Default to 0 if there's an error
          setCurrentStreak(0);
        } else if (data) {
          setCurrentStreak(data.current_streak || 0);
        }
      } catch (err) {
        console.error('Unexpected error loading streak:', err);
        setCurrentStreak(0);
      } finally {
        setLoading(false);
      }
    };
    
    loadStreak();
  }, [user]);

  if (loading) {
    return (
      <div className={styles.completionPage}>
        <div className={styles.hero}>
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.completionPage}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.successIcon}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h1>{message}</h1>
          <p className={styles.description}>
            You've completed your routine for today
          </p>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Streak Display */}
        <section className={styles.impactSection}>
          <h2 className={styles.sectionLabel}>YOUR STREAK</h2>
          <div className={styles.streakDisplay}>
            <div className={styles.streakNumber}>{currentStreak}</div>
            <div className={styles.streakLabel}>
              {currentStreak === 1 ? 'day' : 'days'} in a row
            </div>
            {currentStreak >= 3 && (
              <p className={styles.streakEncouragement}>
                You're on fire! Keep going to build a healthy habit.
              </p>
            )}
          </div>
        </section>

        {/* Product Recommendation */}
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>RECOMMENDED FOR YOU</h2>
          <p className={styles.sectionSubtitle}>
            Based on your routine, you might also like this product
          </p>

          <div className={styles.recommendations}>
            <Link
              to={`/product/${recommendedProduct.slug}`}
              className={styles.productCard}
            >
              <div className={styles.productHeader}>
                <div className={styles.productBadge} style={{
                  background: recommendedProduct.category === 'skincare' 
                    ? 'var(--color-accent-subtle)' 
                    : 'var(--color-lavender-light)',
                  color: recommendedProduct.category === 'skincare' 
                    ? 'var(--color-accent)' 
                    : 'var(--color-lavender)'
                }}>
                  {recommendedProduct.category}
                </div>
                <h3>{recommendedProduct.name}</h3>
              </div>
              <p className={styles.productReason}>{recommendedProduct.short_description}</p>
              <div className={styles.productCta}>
                Learn more →
              </div>
            </Link>
          </div>
        </section>

        {/* Actions */}
        <div className={styles.actions}>
          <Link to="/routines/history" className={styles.secondaryButton}>
            View History
          </Link>
          <Link to="/" className={styles.primaryButton}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
