import { Link } from 'react-router-dom';
import styles from './Auth.module.css';

export default function VerifyEmail() {
  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <div className={styles.authHeader}>
          <h1>Check your email</h1>
          <p>We've sent you a verification link</p>
        </div>

        <div className={styles.verifyContent}>
          <div className={styles.verifyIcon}>
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: 'var(--color-accent)' }}
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>

          <p className={styles.verifyText}>
            Please check your inbox and click the verification link to activate your account.
          </p>

          <p className={styles.verifySubtext}>
            Didn't receive the email? Check your spam folder or{' '}
            <a href="#" className={styles.authLink}>
              resend verification email
            </a>
          </p>
        </div>

        <div className={styles.authFooter}>
          <Link to="/auth/login" className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
            Back to log in
          </Link>
        </div>
      </div>
    </div>
  );
}
