const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const eventRoutes = require('./routes/eventRoutes');

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to Hallos API',
    version: '1.0.0',
    endpoints: {
      events: '/api/events'
    }
  });
});

// API routes
app.use('/api/events', eventRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`Events API available at http://localhost:${port}/api/events`);
});
