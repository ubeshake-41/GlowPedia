import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import styles from './DesktopNav.module.css';

export default function DesktopNav() {
  const { user, isPro } = useAuth();

  return (
    <nav className={styles.desktopNav}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <span className={styles.logoText}>Glow<em>pedia</em></span>
        </Link>

        {/* Nav Links */}
        <div className={styles.navLinks}>
          <NavLink 
            to="/skincare" 
            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
          >
            Skincare
          </NavLink>
          <NavLink 
            to="/cosmetics" 
            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
          >
            Cosmetics
          </NavLink>
          <NavLink 
            to="/quizzes" 
            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
          >
            Quizzes
          </NavLink>
          <NavLink 
            to="/routines" 
            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
          >
            Routines
          </NavLink>
        </div>

        {/* Right side - Auth/Pro CTA */}
        <div className={styles.navActions}>
          {user ? (
            <>
              {!isPro && (
                <Link to="/pro" className={styles.proCta}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Go Pro
                </Link>
              )}
              <Link to="/account" className={styles.accountLink}>
                Account
              </Link>
            </>
          ) : (
            <>
              <Link to="/auth/login" className={styles.loginLink}>
                Log in
              </Link>
              <Link to="/auth/signup" className={styles.signupCta}>
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
