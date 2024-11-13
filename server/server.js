// Load environment variables
require('dotenv').config();

// Require dependencies
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Initialize express
const app = express();

// Require routers
const paymentRouter = require('./routes/paymentRouter');
const productRouter = require('./routes/productRouter');
const adminRouter = require('./routes/adminRouter');
const orderRouter = require('./routes/orderRouter');
const uploadRouter = require('./routes/uploadRouter');

// Require middlewares
const errorMiddleware = require('./middleware/Error');

// Connect to the database
const connectToDb = require('./config/db');
connectToDb();

// Define allowed origins
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://globalizationclothing-frontnend.onrender.com',
  'https://globalizationclothing-admin.onrender.com',
  'https://harmonious-crostata-6fc8a3.netlify.app',
  'https://globalizationclothing.com'
];

// Configure CORS with credentials support
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Parse JSON and cookies
app.use(express.json({ limit: '20mb' }));
app.use(cookieParser());

// Basic API route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API service running 🚀',
  });
});

// Use routers
app.use('/api/payment', paymentRouter);
app.use('/api/products', productRouter);
app.use('/api/admin', adminRouter);
app.use('/api/orders', orderRouter);
app.use('/api/upload', uploadRouter);

// Use error-handling middleware
app.use(errorMiddleware);

// Start server
const server = app.listen(process.env.PORT || 5000, () => {
  console.log('Server running');
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error(`Uncaught Exception: ${err.message}`);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  server.close(() => process.exit(1));
});
