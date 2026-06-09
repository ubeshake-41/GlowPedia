import { useState } from 'react';
import { Link } from 'react-router-dom';
import { starterRoutines, type SkinType } from '../data/routines';
import styles from './RoutinesHub.module.css';

export default function RoutinesHub() {
  const [selectedSkinType, setSelectedSkinType] = useState<SkinType>(null);

  return (
    <div className={styles.routinesHub}>
      {/* Hero */}
      <div className={styles.hero}>
        <h1>Starter Routines</h1>
        <p>Simple, effective routines to get you started. Pick one and make it a habit!</p>
      </div>

      {/* Skin Type Selector */}
      <div className={styles.content}>
        <section className={styles.skinTypeSection}>
          <h2 className={styles.sectionLabel}>PERSONALIZE YOUR ROUTINE</h2>
          <p className={styles.sectionSubtitle}>
            Select your skin type to see customized tips for each routine
          </p>
          
          <div className={styles.skinTypeSelector}>
            <button
              onClick={() => setSelectedSkinType(null)}
              className={`${styles.skinTypeButton} ${selectedSkinType === null ? styles.active : ''}`}
            >
              All Types
            </button>
            <button
              onClick={() => setSelectedSkinType('dry')}
              className={`${styles.skinTypeButton} ${selectedSkinType === 'dry' ? styles.active : ''}`}
            >
              Dry
            </button>
            <button
              onClick={() => setSelectedSkinType('oily')}
              className={`${styles.skinTypeButton} ${selectedSkinType === 'oily' ? styles.active : ''}`}
            >
              Oily
            </button>
            <button
              onClick={() => setSelectedSkinType('combination')}
              className={`${styles.skinTypeButton} ${selectedSkinType === 'combination' ? styles.active : ''}`}
            >
              Combination
            </button>
            <button
              onClick={() => setSelectedSkinType('sensitive')}
              className={`${styles.skinTypeButton} ${selectedSkinType === 'sensitive' ? styles.active : ''}`}
            >
              Sensitive
            </button>
          </div>

          <Link to="/quiz/skin-type-detector" className={styles.quizLink}>
            Don't know your skin type? Take the quiz →
          </Link>
        </section>

        {/* Routines */}
        <section className={styles.routinesSection}>
          <h2 className={styles.sectionLabel}>CHOOSE YOUR ROUTINE</h2>
          
          <div className={styles.routinesGrid}>
            {starterRoutines.map((routine) => (
              <div key={routine.id} className={styles.routineCard}>
                {/* Header */}
                <div className={styles.routineHeader}>
                  <h3>{routine.title}</h3>
                  <div className={styles.timeOfDay}>
                    {routine.timeOfDay === 'morning' && '☀️ Morning'}
                    {routine.timeOfDay === 'night' && '🌙 Night'}
                    {routine.timeOfDay === 'both' && '☀️🌙 AM & PM'}
                  </div>
                </div>

                <p className={styles.routineDescription}>{routine.description}</p>

                {/* Best For Tags */}
                <div className={styles.bestForTags}>
                  {routine.bestFor.map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                {/* Skin Type Note */}
                {selectedSkinType && routine.skinTypeNotes?.[selectedSkinType] && (
                  <div className={styles.skinTypeNote}>
                    <strong>For {selectedSkinType} skin:</strong> {routine.skinTypeNotes[selectedSkinType]}
                  </div>
                )}

                {/* Steps */}
                <div className={styles.steps}>
                  {routine.steps.map((step, index) => (
                    <div key={step.id} className={styles.step}>
                      <div className={styles.stepNumber}>{index + 1}</div>
                      <div className={styles.stepContent}>
                        <div className={styles.stepLabel}>
                          {step.productSlug ? (
                            <Link to={`/product/${step.productSlug}`} className={styles.stepLink}>
                              {step.label}
                            </Link>
                          ) : (
                            <span>{step.label}</span>
                          )}
                        </div>
                        <p className={styles.stepDescription}>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pro CTA */}
                <div className={styles.proPrompt}>
                  <p>Want to track this routine daily?</p>
                  <Link to="/pro" className={styles.proButton}>
                    Upgrade to Pro
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sign-Up Prompt */}
        <section className={styles.signUpPrompt}>
          <div className={styles.promptContent}>
            <h3>Ready to make skincare a habit?</h3>
            <p>Create a free account to save your favorite routines and get personalized recommendations.</p>
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
      </div>
    </div>
  );
}
