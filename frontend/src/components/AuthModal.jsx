import React, { useState } from 'react';

export default function AuthModal({ isOpen, onClose, showToast, onLoginSuccess }) {
  const [activeTab, setActiveTab] = useState('login');
  
  // Login states
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register states
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regPassword, setRegPassword] = useState('');

  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) return;

    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPassword })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        showToast(data.message, true);
        onLoginSuccess(data.user);
        onClose();
        // Reset forms
        setLoginEmail('');
        setLoginPassword('');
      } else {
        showToast(data.message || 'Login failed. Invalid credentials.', false);
      }
    } catch (err) {
      console.error(err);
      showToast('Network error during login.', false);
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (!regName || !regEmail || !regPhone || !regPassword) return;

    setLoading(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: regName, email: regEmail, phone: regPhone, password: regPassword })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        showToast(data.message, true);
        onLoginSuccess(data.user);
        onClose();
        // Reset forms
        setRegName('');
        setRegEmail('');
        setRegPhone('');
        setRegPassword('');
      } else {
        showToast(data.message || 'Registration failed.', false);
      }
    } catch (err) {
      console.error(err);
      showToast('Network error during registration.', false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay open" onClick={onClose}>
      <div className="modal-card glass-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">&times;</button>
        <div className="modal-header">
          <h3 className="modal-title font-serif">Welcome to Ghar Ka Dabba</h3>
          <p class="modal-subtitle">Login or register to order fresh homemade food daily</p>
        </div>
        
        {/* Tab selector */}
        <div className="auth-tabs">
          <button 
            className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`} 
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button 
            className={`auth-tab ${activeTab === 'register' ? 'active' : ''}`} 
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>

        {/* Login Form */}
        {activeTab === 'login' && (
          <form className="modal-form" onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label htmlFor="loginEmail">Email Address / Phone</label>
              <input 
                type="text" 
                id="loginEmail" 
                placeholder="Enter email address or mobile" 
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                disabled={loading}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="loginPassword">Password</label>
              <input 
                type="password" 
                id="loginPassword" 
                placeholder="Enter password" 
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                disabled={loading}
                required 
              />
            </div>
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot-link" onClick={(e) => e.preventDefault()}>Forgot Password?</a>
            </div>
            <button type="submit" className="btn btn-primary w-full" disabled={loading}>
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
        )}

        {/* Register Form */}
        {activeTab === 'register' && (
          <form className="modal-form" onSubmit={handleRegisterSubmit}>
            <div className="form-group">
              <label htmlFor="regName">Full Name</label>
              <input 
                type="text" 
                id="regName" 
                placeholder="Enter your full name" 
                value={regName}
                onChange={(e) => setRegName(e.target.value)}
                disabled={loading}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="regEmail">Email Address</label>
              <input 
                type="email" 
                id="regEmail" 
                placeholder="Enter email address" 
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                disabled={loading}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="regPhone">Mobile Number</label>
              <input 
                type="tel" 
                id="regPhone" 
                placeholder="Enter mobile number" 
                value={regPhone}
                onChange={(e) => setRegPhone(e.target.value)}
                disabled={loading}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="regPassword">Password</label>
              <input 
                type="password" 
                id="regPassword" 
                placeholder="Create strong password" 
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                disabled={loading}
                required 
              />
            </div>
            <button type="submit" className="btn btn-primary w-full" disabled={loading}>
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
