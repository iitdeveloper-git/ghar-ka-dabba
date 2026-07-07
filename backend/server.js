const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory simple storage simulations
let bookings = [];
let subscriptions = [];
let users = [];

// Routes
// 1. Subscribe to newsletter
app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ success: false, message: 'Email is required' });
    }
    
    subscriptions.push({ email, date: new Date() });
    console.log(`[Subscription] New email subscribed: ${email}`);
    
    res.status(200).json({ 
        success: true, 
        message: 'Successfully subscribed to the newsletter!' 
    });
});

// 2. Auth: Register
app.post('/api/auth/register', (req, res) => {
    const { name, email, phone, password } = req.body;
    if (!name || !email || !phone || !password) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const userExists = users.some(u => u.email === email);
    if (userExists) {
        return res.status(400).json({ success: false, message: 'User already exists with this email' });
    }

    const newUser = { name, email, phone, password };
    users.push(newUser);
    console.log(`[Auth] Registered user: ${name} (${email})`);

    res.status(201).json({
        success: true,
        message: `Account successfully created! Welcome, ${name}.`,
        user: { name, email, phone }
    });
});

// 3. Auth: Login
app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    // Simple simulation: Check if user exists or simulate a default success if database is empty for testing
    const user = users.find(u => u.email === email && u.password === password);
    
    // For demonstration, if user array is empty, let them login with a fake successful state
    if (!user && users.length > 0) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const displayName = user ? user.name : 'Guest User';
    console.log(`[Auth] User logged in: ${email}`);

    res.status(200).json({
        success: true,
        message: `Welcome back to Ghar Ka Dabba, ${displayName}!`,
        user: { name: displayName, email }
    });
});

// 4. Create Tiffin Booking
app.post('/api/bookings', (req, res) => {
    const { planName, dietType, rotiCount, deliveryAddress, timeSlot, paymentMethod, totalPrice } = req.body;
    
    if (!planName || !deliveryAddress || !timeSlot || !paymentMethod) {
        return res.status(400).json({ success: false, message: 'Required booking details missing' });
    }

    const newBooking = {
        id: `GKD-${Math.floor(100000 + Math.random() * 900000)}`,
        planName,
        dietType,
        rotiCount,
        deliveryAddress,
        timeSlot,
        paymentMethod,
        totalPrice,
        date: new Date()
    };

    bookings.push(newBooking);
    console.log(`[Booking] New booking confirmed:`, newBooking);

    res.status(201).json({
        success: true,
        message: 'Order booked successfully! Our delivery agent is on the way.',
        booking: newBooking
    });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Ghar Ka Dabba Server is healthy!' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
