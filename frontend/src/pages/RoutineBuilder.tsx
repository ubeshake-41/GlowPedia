import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useProModal } from '../contexts/ProModalContext';
import { supabase } from '../lib/supabase';
import styles from './RoutineBuilder.module.css';

// Define the interface only once
interface RoutineStep {
  id: string;
  name: string;
  productSlug?: string;
}

const COMMON_STEPS = [
  { name: 'Cleanse', productSlug: 'cleanser' },
  { name: 'Tone', productSlug: 'toner' },
  { name: 'Apply Serum', productSlug: 'serum' },
  { name: 'Moisturize', productSlug: 'moisturiser' },
  { name: 'Apply Sunscreen', productSlug: 'sunscreen' },
  { name: 'Remove Makeup', productSlug: 'cleanser' },
];

export default function RoutineBuilder() {
  const { user } = useAuth();
  const { showProModal } = useProModal();
  const navigate = useNavigate();
  const isPro = user?.user_metadata?.role === 'pro';

  const [routineName, setRoutineName] = useState<string>('My Custom Routine');
  const [steps, setSteps] = useState<RoutineStep[]>([]);
  const [customStepName, setCustomStepName] = useState<string>('');

  // Pro gate check
  if (!isPro) {
    return (
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1>Routine Builder</h1>
          <p>Create unlimited personalized skincare routines</p>
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
            <p>The Routine Builder is available to Pro users. Create unlimited custom routines, save them to your account, and track your progress over time.</p>
            <button 
              onClick={() => showProModal('Routine Builder')}
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

  // Functions to handle actions
  const moveStep = (index: number, direction: 'up' | 'down') => {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (newIndex >= 0 && newIndex < steps.length) {
      const newSteps = [...steps];
      [newSteps[index], newSteps[newIndex]] = [newSteps[newIndex], newSteps[index]];
      setSteps(newSteps);
    }
  };

  const removeStep = (id: string) => {
    setSteps(steps.filter(step => step.id !== id));
  };

  const addCommonStep = (stepName: string, productSlug?: string) => {
    const newStep: RoutineStep = {
      id: Date.now().toString(),
      name: stepName,
      productSlug
    };
    setSteps([...steps, newStep]);
  };

  const addCustomStep = () => {
    if (customStepName.trim()) {
      const newStep: RoutineStep = {
        id: Date.now().toString(),
        name: customStepName.trim()
      };
      setSteps([...steps, newStep]);
      setCustomStepName('');
    }
  };

  const saveRoutine = async () => {
    try {
      // Save to Supabase
      const { error } = await supabase
        .from('routines')
        .insert([{
          user_id: user!.id,
          name: routineName,
          steps: steps.map((step, index) => ({ 
            label: step.name, 
            order: index,
            product_slug: step.productSlug
          }))
        }]);

      if (error) {
        console.error('Error saving routine:', error);
        alert('Error saving routine. Please try again.');
        return;
      }

      console.log('Routine saved successfully!');
      navigate('/routines');
    } catch (error) {
      console.error('Error saving routine:', error);
      alert('Error saving routine. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      {/* Hero */}
      <div className={styles.hero}>
        <h1>Routine Builder</h1>
        <p>Create your personalized skincare routine</p>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Routine Name */}
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>ROUTINE NAME</h2>
            <input
              type="text"
              value={routineName}
              onChange={(e) => setRoutineName(e.target.value)}
              className={styles.input}
              placeholder="Enter routine name"
            />
        </section>

        {/* Current Steps */}
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>YOUR ROUTINE ({steps.length} STEPS)</h2>
          
          {steps.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No steps added yet. Add steps from the library below or create your own.</p>
            </div>
          ) : (
            <div className={styles.stepsList}>
              {steps.map((step, index) => (
                <div key={step.id} className={styles.stepCard}>
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <div className={styles.stepContent}>
                    <h3>{step.name}</h3>
                    {step.productSlug && (
                      <Link to={`/product/${step.productSlug}`} className={styles.stepLink}>
                        Learn more →
                      </Link>
                    )}
                  </div>
                  <div className={styles.stepActions}>
              <button
                onClick={() => moveStep(index, 'up')}
                disabled={index === 0}
                className={styles.iconButton}
                title="Move up"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="18 15 12 9 6 15"/>
                </svg>
              </button>
              <button
                onClick={() => moveStep(index, 'down')}
                disabled={index === steps.length - 1}
                className={styles.iconButton}
                title="Move down"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <button
                onClick={() => removeStep(step.id)}
                className={styles.iconButton}
                title="Remove"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="15" y1="9" x2="9" y2="15"/>
                  <line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
              </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Common Steps Library */}
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>COMMON STEPS</h2>
          <p className={styles.sectionSubtitle}>Click to add to your routine</p>
          
          <div className={styles.grid}>
            {COMMON_STEPS.map((step, index) => (
              <button
                key={index}
                onClick={() => addCommonStep(step.name, step.productSlug)}
                className={styles.card}
                style={{ cursor: 'pointer' }}
              >
                <h3>{step.name}</h3>
                <span className={styles.cardCta}>Add to routine +</span>
              </button>
            ))}
          </div>
        </section>

        {/* Custom Step */}
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>ADD CUSTOM STEP</h2>
          <div className={styles.customStepForm}>
            <input
              type="text"
              value={customStepName}
              onChange={(e) => setCustomStepName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addCustomStep()}
              className={styles.input}
              placeholder="Enter custom step name"
            />
            <button onClick={addCustomStep} className={styles.addButton}>
              Add Step
            </button>
          </div>
        </section>

        {/* Actions */}
        <div className={styles.actions}>
          <Link to="/routines" className={styles.secondaryButton}>
            Cancel
          </Link>
          <button 
            onClick={saveRoutine}
            className={styles.primaryButton}
            disabled={steps.length === 0}
          >
            Save Routine
          </button>
        </div>
      </div>
    </div>
  );
}
