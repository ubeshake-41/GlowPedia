import { NavLink } from 'react-router-dom';
import styles from './MobileNav.module.css';

export default function MobileNav() {
  return (
    <nav className={styles.mobileNav}>
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        <span>Home</span>
      </NavLink>

      <NavLink 
        to="/skincare" 
        className={({ isActive }) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
        <span>Skincare</span>
      </NavLink>

      <NavLink 
        to="/cosmetics" 
        className={({ isActive }) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
          <line x1="7" y1="7" x2="7.01" y2="7"/>
        </svg>
        <span>Cosmetics</span>
      </NavLink>

      <NavLink 
        to="/quizzes" 
        className={({ isActive }) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
        <span>Quizzes</span>
      </NavLink>

      <NavLink 
        to="/routines" 
        className={({ isActive }) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 11l3 3L22 4"/>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
        </svg>
        <span>Routines</span>
      </NavLink>
    </nav>
  );
}
