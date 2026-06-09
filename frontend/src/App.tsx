import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProModalProvider, useProModal } from './contexts/ProModalContext';
import { SavedProductsProvider } from './contexts/SavedProductsContext';
import ProUpgradeModal from './components/ProUpgradeModal';
import GlowAIButton from './components/GlowAIButton';
import DesktopNav from './components/Navigation/DesktopNav';
import MobileNav from './components/Navigation/MobileNav';
import Homepage from './pages/Homepage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import VerifyEmail from './pages/VerifyEmail';
import Placeholder from './pages/Placeholder';
import ProductWiki from './pages/ProductWiki';
import CategoryPage from './pages/CategoryPage';
import ComparePage from './pages/ComparePage';
import QuizzesHub from './pages/QuizzesHub';
import QuizFlow from './pages/QuizFlow';
import QuizResult from './pages/QuizResult';
import RoutinesHub from './pages/RoutinesHub';
import RoutineBuilder from './pages/RoutineBuilder';
import DailyTracker from './pages/DailyTracker';
import RoutineCompletion from './pages/RoutineCompletion';
import AccountDashboard from './pages/AccountDashboard';
import SavedProducts from './pages/SavedProducts';

function AppContent() {
  const { isModalOpen, currentFeature, closeModal } = useProModal();

  return (
    <>
      <DesktopNav />
        <div style={{ paddingBottom: '70px' }}> {/* Space for mobile nav */}
          <Routes>
            {/* Public routes */}
            <Route index element={<Homepage />} />
            <Route path="/" element={<Homepage />} />
            
            {/* Auth routes */}
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/verify-email" element={<VerifyEmail />} />
            
            {/* Product pages */}
            <Route path="/product/:slug" element={<ProductWiki />} />
            <Route path="/compare/:slug" element={<ComparePage />} />
            
            {/* Quizzes */}
            <Route path="/quizzes" element={<QuizzesHub />} />
            <Route path="/quiz/:quizId" element={<QuizFlow />} />
            <Route path="/quiz/:quizId/result" element={<QuizResult />} />
            
            {/* Routines */}
            <Route path="/routines" element={<RoutinesHub />} />
            <Route path="/routines/builder" element={<RoutineBuilder />} />
            <Route path="/routines/tracker" element={<DailyTracker />} />
            <Route path="/routines/tracker/complete" element={<RoutineCompletion />} />
            <Route path="/routines/history" element={<Placeholder title="Routine History" description="View your routine completion history" />} />
            
            {/* Pro features */}
            <Route path="/pro" element={<Placeholder title="Go Pro" description="Unlock premium features and personalized AI guidance" />} />
            <Route path="/glow-ai" element={<Placeholder title="Glow AI" description="Your personal AI skincare assistant" />} />
            
            {/* Account */}
            <Route path="/account" element={<AccountDashboard />} />
            <Route path="/account/saved" element={<SavedProducts />} />
            
            {/* Category pages - must be last before catch-all */}
            <Route path="/:category" element={<CategoryPage />} />
            
            {/* Catch all - redirect to homepage */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      <GlowAIButton />
      <MobileNav />
      <ProUpgradeModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        feature={currentFeature}
      />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/GlowPedia">
      <AuthProvider>
        <ProModalProvider>
          <SavedProductsProvider>
            <AppContent />
          </SavedProductsProvider>
        </ProModalProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
