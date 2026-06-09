import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface ProModalContextType {
  showProModal: (feature?: string) => void;
  isModalOpen: boolean;
  currentFeature: string | undefined;
  closeModal: () => void;
  hasBeenDismissed: (feature: string) => boolean;
}

const ProModalContext = createContext<ProModalContextType | undefined>(undefined);

const DISMISSED_FEATURES_KEY = 'dismissedProFeatures';

export function ProModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFeature, setCurrentFeature] = useState<string | undefined>();

  // Check if a feature has been dismissed in this session
  const hasBeenDismissed = (feature: string): boolean => {
    try {
      const dismissed = sessionStorage.getItem(DISMISSED_FEATURES_KEY);
      if (!dismissed) return false;
      const dismissedArray = JSON.parse(dismissed) as string[];
      return dismissedArray.includes(feature);
    } catch {
      return false;
    }
  };

  // Mark a feature as dismissed for this session
  const markAsDismissed = (feature: string) => {
    try {
      const dismissed = sessionStorage.getItem(DISMISSED_FEATURES_KEY);
      const dismissedArray = dismissed ? JSON.parse(dismissed) as string[] : [];
      if (!dismissedArray.includes(feature)) {
        dismissedArray.push(feature);
        sessionStorage.setItem(DISMISSED_FEATURES_KEY, JSON.stringify(dismissedArray));
      }
    } catch (error) {
      console.error('Failed to save dismissed feature:', error);
    }
  };

  // Show the modal (only if not already dismissed)
  const showProModal = (feature?: string) => {
    // If feature is specified and has been dismissed, don't show modal
    if (feature && hasBeenDismissed(feature)) {
      return;
    }
    
    setCurrentFeature(feature);
    setIsModalOpen(true);
  };

  // Close the modal and mark feature as dismissed
  const closeModal = () => {
    if (currentFeature) {
      markAsDismissed(currentFeature);
    }
    setIsModalOpen(false);
    setCurrentFeature(undefined);
  };

  return (
    <ProModalContext.Provider
      value={{
        showProModal,
        isModalOpen,
        currentFeature,
        closeModal,
        hasBeenDismissed
      }}
    >
      {children}
    </ProModalContext.Provider>
  );
}

export function useProModal() {
  const context = useContext(ProModalContext);
  if (context === undefined) {
    throw new Error('useProModal must be used within a ProModalProvider');
  }
  return context;
}
