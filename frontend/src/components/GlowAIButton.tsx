import { useEffect, useState } from 'react';
import { useProModal } from '../contexts/ProModalContext';
import { useAuth } from '../contexts/AuthContext';
import GlowAIChatPanel from './GlowAIChatPanel';
import styles from './GlowAIButton.module.css';

export default function GlowAIButton() {
  const { user } = useAuth();
  const { showProModal } = useProModal();
  const isPro = user?.user_metadata?.role === 'pro';
  const [isVisible, setIsVisible] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleClick = () => {
    if (!isPro) {
      showProModal('Glow AI');
    } else {
      // For Pro users, open the chat panel
      setIsChatOpen(true);
    }
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  // Handle scrolling to hide/show the button appropriately
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(currentScrollPos < 100); // Show if near top of page
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <button 
        className={`${styles.glowAIButton} ${isVisible ? styles.visible : styles.hidden}`}
        onClick={handleClick}
        aria-label="Glow AI Assistant"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
        <span className={styles.tooltip}>Glow AI</span>
      </button>
      <GlowAIChatPanel isOpen={isChatOpen} onClose={handleCloseChat} />
    </>
  );
}