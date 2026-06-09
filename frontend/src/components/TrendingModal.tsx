import { Link } from 'react-router-dom';
import type { DiscoverItem } from '../data/trending';
import styles from './TrendingModal.module.css';

interface TrendingModalProps {
  item: DiscoverItem;
  onClose: () => void;
}

export default function TrendingModal({ item, onClose }: TrendingModalProps) {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalBackdrop} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        {/* Close button */}
        <button className={styles.closeButton} onClick={onClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Badge */}
        <div className={styles.badge} style={{
          background: item.type === 'brand' 
            ? 'var(--color-lavender-light)' 
            : item.type === 'guide'
            ? 'var(--color-mint-light)'
            : 'var(--color-accent-subtle)',
          color: item.type === 'brand' 
            ? 'var(--color-lavender)' 
            : item.type === 'guide'
            ? 'var(--color-success)'
            : 'var(--color-accent)'
        }}>
          {item.badge}
        </div>

        {/* Title */}
        <h2>{item.title}</h2>

        {/* Description */}
        <p className={styles.description}>{item.description}</p>

        {/* Detailed Info */}
        {item.detailedInfo && (
          <div className={styles.detailedInfo}>
            <p>{item.detailedInfo}</p>
          </div>
        )}

        {/* Additional Links */}
        {item.additionalLinks && item.additionalLinks.length > 0 && (
          <div className={styles.linksSection}>
            <h4>Learn More:</h4>
            <div className={styles.linksList}>
              {item.additionalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkButton}
                >
                  {link.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div className={styles.actions}>
          {item.wikiSlug && (
            <Link to={`/product/${item.wikiSlug}`} className={styles.primaryButton}>
              Learn more →
            </Link>
          )}
          {item.externalUrl && !item.wikiSlug && (
            <a 
              href={item.externalUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.primaryButton}
            >
              Learn more →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
