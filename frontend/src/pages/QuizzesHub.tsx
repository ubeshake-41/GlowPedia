import { Link } from 'react-router-dom';
import { freeQuizzes, proQuizzes } from '../data/quizzes';
import { useAuth } from '../contexts/AuthContext';
import { useProModal } from '../contexts/ProModalContext';
import styles from './Placeholder.module.css';

export default function QuizzesHub() {
  const { user } = useAuth();
  const { showProModal } = useProModal();
  const isPro = user?.user_metadata?.role === 'pro';

  const handleProQuizClick = (quizTitle: string) => {
    if (!isPro) {
      showProModal(quizTitle);
    }
  };
  return (
    <div className={styles.placeholder}>
      {/* Hero */}
      <div className={styles.hero}>
        <h1>Quizzes</h1>
        <p>Discover your skin type, build your routine, and get personalized recommendations</p>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>FREE QUIZZES</h2>
          <p className={styles.sectionSubtitle}>
            Take these quizzes to learn more about your skin and get personalized product recommendations
          </p>

          <div className={styles.grid}>
            {freeQuizzes.map((quiz) => (
              <Link
                key={quiz.id}
                to={`/quiz/${quiz.id}`}
                className={styles.card}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.badge} style={{ background: 'var(--color-mint-light)', color: 'var(--color-success)' }}>
                    Free
                  </div>
                  <h3>{quiz.title}</h3>
                </div>
                <p>{quiz.description}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.quizLength}>
                    {quiz.questions.length} questions
                  </span>
                  <span className={styles.cardCta}>
                    Start Quiz →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Pro Quizzes Teaser */}
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>PRO QUIZZES</h2>
          <p className={styles.sectionSubtitle}>
            Unlock advanced quizzes with a Pro account
          </p>

          <div className={styles.grid}>
            {proQuizzes.map((quiz) => (
              isPro ? (
                <Link
                  key={quiz.id}
                  to={`/quiz/${quiz.id}`}
                  className={styles.card}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.badge} style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)', color: 'var(--color-text-primary)' }}>
                      <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" style={{ verticalAlign: 'middle', marginRight: '4px' }}>
                        <path d="M248,80a28,28,0,1,0-51.12,15.77l-26.79,33L146,73.4a28,28,0,1,0-36.06,0L85.91,128.74l-26.79-33a28,28,0,1,0-26.6,12L47,194.63A16,16,0,0,0,62.78,208H193.22A16,16,0,0,0,209,194.63l14.47-86.85A28,28,0,0,0,248,80ZM128,40a12,12,0,1,1-12,12A12,12,0,0,1,128,40ZM24,80A12,12,0,1,1,36,92,12,12,0,0,1,24,80ZM193.22,192H62.78L48.86,108.52,81.79,149A8,8,0,0,0,88,152a7.91,7.91,0,0,0,3.27-.71L128,130.13l36.76,21.16A7.91,7.91,0,0,0,168,152a8,8,0,0,0,6.21-3L207.14,108.52ZM220,92a12,12,0,1,1,12-12A12,12,0,0,1,220,92Z"/>
                      </svg>
                      Pro
                    </div>
                    <h3>{quiz.title}</h3>
                  </div>
                  <p>{quiz.description}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.quizLength}>
                      {quiz.questions.length} questions
                    </span>
                    <span className={styles.cardCta}>
                      Start Quiz →
                    </span>
                  </div>
                </Link>
              ) : (
                <div
                  key={quiz.id}
                  className={styles.cardLocked}
                  onClick={() => handleProQuizClick(quiz.title)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className={styles.lockIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </div>
                  <h3>{quiz.title}</h3>
                  <p>{quiz.description}</p>
                  <div className={styles.upgradeButton}>
                    Unlock with Pro
                  </div>
                </div>
              )
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
