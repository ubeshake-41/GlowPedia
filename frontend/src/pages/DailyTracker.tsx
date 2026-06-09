import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useProModal } from '../contexts/ProModalContext';
import { supabase } from '../lib/supabase';
import styles from './DailyTracker.module.css';

interface RoutineStep {
  id: string;
  name: string;
  completed: boolean;
  productSlug?: string;
}

// Mock routine data - will be replaced with Supabase data
const MOCK_ROUTINE = {
  id: '1',
  name: 'Morning Routine',
  steps: [
    { id: '1', name: 'Cleanse', completed: false, productSlug: 'cleanser' },
    { id: '2', name: 'Tone', completed: false, productSlug: 'toner' },
    { id: '3', name: 'Apply Serum', completed: false, productSlug: 'serum' },
    { id: '4', name: 'Moisturize', completed: false, productSlug: 'moisturiser' },
    { id: '5', name: 'Apply Sunscreen', completed: false, productSlug: 'sunscreen' },
  ]
};

export default function DailyTracker() {
  const { user } = useAuth();
  const { showProModal } = useProModal();
  const navigate = useNavigate();
  const isPro = user?.user_metadata?.role === 'pro';

  const [routine, setRoutine] = useState(MOCK_ROUTINE);
  const [steps, setSteps] = useState<RoutineStep[]>(MOCK_ROUTINE.steps);
  const [hasCompletedToday, setHasCompletedToday] = useState(false);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [lastCompletedDate, setLastCompletedDate] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Load routine completion data and streak info from Supabase
  useEffect(() => {
    if (!user?.id) return;
    
    const loadData = async () => {
      try {
        // Check if user has completed routine today
        const today = new Date().toISOString().split('T')[0];
        
        // Fetch today's completion record from Supabase
        const { data: completionData, error: completionError } = await supabase
          .from('routine_completions')
          .select('*')
          .eq('user_id', user.id)
          .eq('date', today)
          .single();
        
        if (completionError && completionError.code !== 'PGRST116') {
          // PGRST116 is the error code when no records are found (expected for new users)
          console.error('Error fetching today\'s completion:', completionError);
        }
        
        if (completionData) {
          setHasCompletedToday(true);
        }
        
        // Fetch user's current streak from their profile
        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('current_streak')
          .eq('id', user.id)
          .single();
        
        if (userError) {
          console.error('Error fetching user streak:', userError);
        } else if (userData) {
          setCurrentStreak(userData.current_streak || 0);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error loading routine data:', error);
        setLoading(false);
      }
    };
    
    loadData();
  }, [user]);

  // Pro gate check
  if (!isPro) {
    return (
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1>Daily Tracker</h1>
          <p>Track your daily routine progress and build streaks</p>
        </div>

        <div className={styles.content}>
          <div className={styles.proFeatureCard}>
            <div className={styles.lockIcon}>
              <svg width="48" height="48" viewBox="0 0 256 256" fill="currentColor">
                <path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z" opacity="0.2"/>
                <path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"/>
              </svg>
            </div>
            <h2>Pro Feature</h2>
            <p>The Daily Tracker is available to Pro users. Track your routine completion, build streaks, and see your progress over time.</p>
            <button 
              onClick={() => showProModal('Daily Tracker')}
              className={styles.upgradeButton}
            >
              Upgrade to Pro
            </button>
            <Link to="/routines" className={styles.backButton}>
              Back to Routines
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

    const completedCount = steps.filter(s => s.completed).length;
    const totalCount = steps.length;
    const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;
    const isComplete = completedCount === totalCount && totalCount > 0 && !hasCompletedToday;

  const toggleStep = (id: string) => {
    if (hasCompletedToday) return; // Don't allow changes if already completed today
    
    setSteps(steps.map(step => 
      step.id === id ? { ...step, completed: !step.completed } : step
    ));
  };

  const completeRoutine = async () => {
    if (hasCompletedToday) return; // Prevent multiple completions in one day
    
    try {
      // Get today's date in YYYY-MM-DD format
      const today = new Date().toISOString().split('T')[0];
      
      // Check for yesterday's completion to determine streak
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];
      
      const { data: yesterdayCompletion, error: yesterdayError } = await supabase
        .from('routine_completions')
        .select('*')
        .eq('user_id', user!.id)
        .eq('date', yesterdayStr)
        .single();
      
      // Calculate new streak
      let newStreak = 1; // Default to 1 if no previous completion
      if (yesterdayCompletion) {
        // Continuing streak from yesterday
        newStreak = currentStreak + 1;
      } else {
        // Check if there were previous completions but not yesterday (reset streak)
        // For simplicity, if we had a streak but didn't complete yesterday, reset to 1
        if (currentStreak > 0) {
          newStreak = 1; // Reset since yesterday was missed
        }
      }
      
      // Insert today's completion record
      const { error: insertError } = await supabase
        .from('routine_completions')
        .insert([{
          routine_id: routine.id,
          user_id: user!.id,
          date: today,
          steps_completed: steps.filter(s => s.completed).map((_, idx) => idx),
          fully_completed: isComplete
        }]);
      
      if (insertError) {
        console.error('Error inserting completion:', insertError);
        throw insertError;
      }
      
       // Update user's streak in their profile
       const { error: streakUpdateError } = await supabase
         .from('users')
         .update({ current_streak: newStreak })
         .eq('id', user!.id);
      
      if (streakUpdateError) {
        console.error('Error updating streak:', streakUpdateError);
        throw streakUpdateError;
      }
      
      // Update local state
      setCurrentStreak(newStreak);
      setHasCompletedToday(true);
      
      // Navigate to completion screen
      navigate('/routines/tracker/complete');
    } catch (error) {
      console.error('Error completing routine:', error);
    }
  };

  return (
    <div className={styles.container}>
      {/* Hero */}
      <div className={styles.hero}>
        <h1>{routine.name}</h1>
        <p>Track your progress for today</p>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Progress Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>TODAY'S PROGRESS</h2>
          
          <div className={styles.progressCard}>
                <div className={styles.progressStats}>
                  <div className={styles.progressNumber}>
                    {completedCount} / {totalCount}
                  </div>
                  <div className={styles.progressLabel}>Steps Completed</div>
                </div>
            
            <div className={styles.progressBarContainer}>
              <div 
                className={styles.progressBar}
                style={{ 
                  width: `${progress}%`,
                  background: isComplete ? 'var(--color-success)' : 'var(--color-accent)'
                }}
              />
            </div>
            
            <div className={styles.progressPercentage}>{Math.round(progress)}%</div>
          </div>
        </section>

        {/* Steps Checklist */}
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>YOUR ROUTINE</h2>
          
          <div className={styles.checklistContainer}>
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`${styles.checklistItem} ${step.completed ? styles.completed : ''}`}
              >
                <button
                  onClick={() => toggleStep(step.id)}
                  className={styles.checkbox}
                  aria-label={step.completed ? 'Mark as incomplete' : 'Mark as complete'}
                >
                   {step.completed && (
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                       <polyline points="20 6 9 17 4 12"/>
                     </svg>
                   )}
                </button>
                
                <div className={styles.checklistContent}>
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <div className={styles.stepInfo}>
                    <h3>{step.name}</h3>
                    {step.productSlug && (
                      <Link to={`/product/${step.productSlug}`} className={styles.stepLink}>
                        Learn more →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Completion CTA */}
        {isComplete && (
          <section className={styles.section}>
            <div className={styles.completionPrompt}>
              <div className={styles.completionIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>Great job! You've completed all steps!</h3>
              <p>Mark this routine as complete to update your streak.</p>
              <button onClick={completeRoutine} className={styles.primaryButton}>
                Complete Routine
              </button>
            </div>
          </section>
        )}

        {/* Actions */}
        <div className={styles.actions}>
          <Link to="/routines" className={styles.secondaryButton}>
            Back to Routines
          </Link>
          <Link to="/routines/builder" className={styles.secondaryButton}>
            Edit Routine
          </Link>
        </div>
      </div>
    </div>
  );
}