import React, { useState, useEffect } from 'react';

export default function OrderModal({ isOpen, onClose, selectedPlan, onConfirmBooking }) {
  const [dietType, setDietType] = useState('veg');
  const [rotiCount, setRotiCount] = useState(4);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [timeSlot, setTimeSlot] = useState('lunch-1');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  // Initialize values when selectedPlan changes
  useEffect(() => {
    if (selectedPlan) {
      setDietType('veg');
      setRotiCount(selectedPlan.defaultRoti || 4);
      setEstimatedPrice(selectedPlan.price || 0);
    }
  }, [selectedPlan]);

  // Recalculate price dynamically when portion or diet changes
  useEffect(() => {
    if (!selectedPlan) return;

    const defaultRoti = selectedPlan.defaultRoti || 4;
    const extraRotiCost = Math.max(0, rotiCount - defaultRoti) * 5;
    const nonVegCost = dietType === 'nonveg' ? 40 : 0;
    
    setEstimatedPrice(selectedPlan.price + extraRotiCost + nonVegCost);
  }, [rotiCount, dietType, selectedPlan]);

  if (!isOpen || !selectedPlan) return null;

  const handleRotiDec = () => {
    if (rotiCount > 1) {
      setRotiCount(rotiCount - 1);
    }
  };

  const handleRotiInc = () => {
    setRotiCount(rotiCount + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!deliveryAddress.trim()) return;

    const bookingDetails = {
      planName: selectedPlan.name,
      dietType,
      rotiCount,
      deliveryAddress,
      timeSlot,
      paymentMethod,
      totalPrice: estimatedPrice
    };

    onConfirmBooking(bookingDetails);
  };

  return (
    <div className="modal-overlay open" onClick={onClose}>
      <div className="modal-card glass-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">&times;</button>
        <div className="modal-header">
          <h3 className="modal-title font-serif">Configure Your Meal Subscription</h3>
          <p className="modal-subtitle" id="selectedPlanTitle">Plan: {selectedPlan.name}</p>
        </div>
        
        <form className="modal-form" onSubmit={handleSubmit}>
          {/* Step 1: Diet preferences */}
          <div className="form-section-title">1. Diet Preferences</div>
          <div className="diet-selector">
            <label className={`diet-option ${dietType === 'veg' ? 'active' : ''}`}>
              <input 
                type="radio" 
                name="dietType" 
                value="veg" 
                checked={dietType === 'veg'}
                onChange={() => setDietType('veg')}
              />
              <span>Pure Vegetarian</span>
            </label>
            <label className={`diet-option ${dietType === 'nonveg' ? 'active' : ''}`}>
              <input 
                type="radio" 
                name="dietType" 
                value="nonveg"
                checked={dietType === 'nonveg'}
                onChange={() => setDietType('nonveg')}
              />
              <span>Veg + Non-Veg Mix</span>
            </label>
          </div>

          {/* Step 2: Custom portion configs */}
          <div className="form-section-title">2. Customize Roti/Rice Portion</div>
          <div className="custom-portion-row">
            <div className="portion-counter">
              <span className="portion-label">Roti count:</span>
              <div className="counter-controls">
                <button type="button" className="counter-btn" onClick={handleRotiDec}>-</button>
                <span>{rotiCount}</span>
                <button type="button" className="counter-btn" onClick={handleRotiInc}>+</button>
              </div>
            </div>
          </div>

          {/* Step 3: Address & Time slots */}
          <div className="form-section-title">3. Delivery Address & Schedule</div>
          <div className="form-group">
            <label htmlFor="deliveryAddress">Delivery Address</label>
            <input 
              type="text" 
              id="deliveryAddress" 
              placeholder="Enter flat/office details, area, building" 
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              required 
            />
          </div>
          
          <div className="form-grid-2">
            <div className="form-group">
              <label htmlFor="deliveryTimeSlot">Time Slot</label>
              <select 
                id="deliveryTimeSlot" 
                value={timeSlot} 
                onChange={(e) => setTimeSlot(e.target.value)}
                required
              >
                <option value="lunch-1">Lunch (12:00 PM - 01:00 PM)</option>
                <option value="lunch-2">Lunch (01:00 PM - 02:00 PM)</option>
                <option value="dinner-1">Dinner (08:00 PM - 09:00 PM)</option>
                <option value="dinner-2">Dinner (09:00 PM - 10:00 PM)</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="paymentMethod">Payment Method</label>
              <select 
                id="paymentMethod" 
                value={paymentMethod} 
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              >
                <option value="upi">UPI (GPay / PhonePe / Paytm)</option>
                <option value="cod">Cash on Delivery (COD)</option>
                <option value="card">Credit / Debit Card</option>
              </select>
            </div>
          </div>

          <div className="modal-footer-price">
            <span>Total Estimated:</span>
            <span className="price-val">₹{estimatedPrice}</span>
          </div>
          
          <button type="submit" className="btn btn-primary w-full">Confirm Meal Booking</button>
        </form>
      </div>
    </div>
  );
}
