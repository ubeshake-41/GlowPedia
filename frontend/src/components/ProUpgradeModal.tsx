import { Link } from 'react-router-dom';
import styles from './ProUpgradeModal.module.css';

interface ProUpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature?: string; // Optional: what feature triggered the modal
}

export default function ProUpgradeModal({ isOpen, onClose, feature }: ProUpgradeModalProps) {
  if (!isOpen) return null;

  const benefits = [
    {
      icon: '📊',
      title: 'Advanced Quizzes',
      description: 'Beauty Style, Routine Optimizer, and Ingredient Match quizzes'
    },
    {
      icon: '✅',
      title: 'Daily Routine Tracker',
      description: 'Check off steps, track streaks, and see your progress'
    },
    {
      icon: '🛠️',
      title: 'Custom Routines',
      description: 'Create unlimited personalized routines that work for you'
    },
    {
      icon: '🤖',
      title: 'Glow AI Assistant',
      description: 'Get instant answers and personalized skincare advice'
    },
    {
      icon: '📸',
      title: 'Progress Photos',
      description: 'Upload photos and track your skin improvements over time'
    },
    {
      icon: '📈',
      title: 'Detailed Analytics',
      description: 'See charts and insights on your skincare journey'
    }
  ];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.crownIcon}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#crownGradient)" stroke="url(#crownStroke)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="crownGradient" x1="12" y1="2" x2="12" y2="21" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFB8D9"/>
                  <stop offset="0.3" stopColor="#FFA8CC"/>
                  <stop offset="0.6" stopColor="#FFBB77"/>
                  <stop offset="1" stopColor="#FF9944"/>
                </linearGradient>
                <linearGradient id="crownStroke" x1="12" y1="2" x2="12" y2="21" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFA8CC"/>
                  <stop offset="1" stopColor="#FF7744"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2>Upgrade to Pro</h2>
          {feature && (
            <p className={styles.featureNote}>
              {feature} is a Pro feature
            </p>
          )}
          <p className={styles.subtitle}>
            Unlock advanced tracking, AI guidance, and personalized insights
          </p>
        </div>

        {/* Benefits */}
        <div className={styles.benefits}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefit}>
              <span className={styles.benefitIcon}>{benefit.icon}</span>
              <div className={styles.benefitContent}>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <Link to="/pro" className={styles.upgradeButton} onClick={onClose}>
            Upgrade to Pro
          </Link>
          <button onClick={onClose} className={styles.dismissButton}>
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
