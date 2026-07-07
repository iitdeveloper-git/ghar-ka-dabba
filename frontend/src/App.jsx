import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import GalleryView from './views/GalleryView';
import AuthModal from './components/AuthModal';
import OrderModal from './components/OrderModal';
import CartDrawer from './components/CartDrawer';

function AppContent() {
  // Modal states
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // Business states
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [cartItem, setCartItem] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Toast states
  const [toastShow, setToastShow] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastSuccess, setToastSuccess] = useState(true);

  // Helper to trigger toast
  const showToast = (message, isSuccess = true) => {
    setToastMessage(message);
    setToastSuccess(isSuccess);
    setToastShow(true);
  };

  useEffect(() => {
    if (toastShow) {
      const timer = setTimeout(() => {
        setToastShow(false);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toastShow]);

  // Auth Handlers
  const handleLoginSuccess = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    showToast('Logged out successfully.', true);
  };

  // Booking Confirmation Handler
  const handleConfirmBooking = (bookingDetails) => {
    setCartItem(bookingDetails);
    setOrderModalOpen(false);
    showToast('Plan configured! Proceed to checkout in your cart.', true);
    
    // Automatically slide out cart drawer
    setTimeout(() => {
      setCartOpen(true);
    }, 800);
  };

  // Cart Handlers
  const handleCheckoutSuccess = () => {
    setCartItem(null);
  };

  // Plan Selection Trigger
  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setOrderModalOpen(true);
  };

  return (
    <>
      <Navbar 
        onOpenCart={() => setCartOpen(true)}
        onOpenAuth={() => setAuthModalOpen(true)}
        cartItem={cartItem}
        isLoggedIn={isLoggedIn}
        user={user}
        onLogout={handleLogout}
      />

      <Routes>
        <Route 
          path="/" 
          element={
            <HomeView 
              onSelectPlan={handleSelectPlan} 
              showToast={showToast} 
            />
          } 
        />
        <Route 
          path="/gallery" 
          element={<GalleryView showToast={showToast} />} 
        />
      </Routes>

      <Footer />

      {/* Modals & Sidebar Drawers */}
      <AuthModal 
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        showToast={showToast}
        onLoginSuccess={handleLoginSuccess}
      />

      <OrderModal 
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        selectedPlan={selectedPlan}
        onConfirmBooking={handleConfirmBooking}
      />

      <CartDrawer 
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItem={cartItem}
        onCheckoutSuccess={handleCheckoutSuccess}
        showToast={showToast}
      />

      {/* Global Toast Notification */}
      <div className={`toast-card glass-panel ${toastShow ? 'show' : ''}`} id="toastNotification">
        <span 
          className="toast-icon" 
          style={{ backgroundColor: toastSuccess ? 'var(--color-green)' : 'var(--color-red)' }}
        >
          {toastSuccess ? '✓' : '×'}
        </span>
        <span className="toast-message">{toastMessage}</span>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
