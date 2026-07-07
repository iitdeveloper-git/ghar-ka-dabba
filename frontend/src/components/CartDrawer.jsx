import React, { useState } from 'react';

export default function CartDrawer({ isOpen, onClose, cartItem, onCheckoutSuccess, showToast }) {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleCheckout = async () => {
    if (!cartItem) return;

    setLoading(true);
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cartItem)
      });
      const data = await res.json();
      
      if (res.ok && data.success) {
        showToast(data.message, true);
        onCheckoutSuccess();
        onClose();
      } else {
        showToast(data.message || 'Checkout failed. Please try again.', false);
      }
    } catch (err) {
      console.error(err);
      showToast('Network error during checkout.', false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="drawer-overlay open" onClick={onClose}>
      <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <h3 className="drawer-title font-serif">Your Food Cart</h3>
          <button className="drawer-close-btn" onClick={onClose}>&times;</button>
        </div>
        
        <div className="drawer-body">
          {!cartItem ? (
            <div className="empty-cart-state">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="empty-cart-icon">
                <circle cx="8" cy="21" r="1"/>
                <circle cx="19" cy="21" r="1"/>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
              </svg>
              <p>Your cart is empty</p>
              <span>Choose a meal plan below to add tasty food here!</span>
              <a href="#plans" className="btn btn-outline" onClick={onClose}>Browse Plans</a>
            </div>
          ) : (
            <div className="cart-items-list">
              <div className="cart-item-row">
                <div className="cart-item-details">
                  <span className="cart-item-name">{cartItem.planName}</span>
                  <span className="cart-item-meta text-capitalize">
                    {cartItem.dietType === 'veg' ? 'Pure Veg' : 'Veg + Non-Veg'} • Rotis: {cartItem.rotiCount} • Slot: {cartItem.timeSlot}
                  </span>
                </div>
                <div className="cart-item-price">₹{cartItem.totalPrice}</div>
              </div>
              <div className="cart-summary-section">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₹{cartItem.totalPrice}</span>
                </div>
                <div className="summary-row">
                  <span>Delivery Fee</span>
                  <span className="text-free">FREE</span>
                </div>
                <div className="summary-row total-row">
                  <span>Grand Total</span>
                  <span>₹{cartItem.totalPrice}</span>
                </div>
              </div>
              <button 
                className="btn btn-primary w-full" 
                onClick={handleCheckout}
                disabled={loading}
              >
                {loading ? 'Processing Order...' : 'Proceed to Order'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
