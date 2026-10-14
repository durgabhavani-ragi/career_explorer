const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB Database
connectDB();

const app = express();

// Allowed Origins (strictly allow the deployed Vercel frontend, CLIENT_URL, and local development)
const allowedOrigins = [
  'https://career-explorer-tan.vercel.app',
  ...(process.env.CLIENT_URL ? [process.env.CLIENT_URL.replace(/\/$/, '')] : []),
  ...(process.env.NODE_ENV !== 'production' ? ['http://localhost:5173', 'http://localhost:3000'] : [])
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (e.g. mobile apps, curl, server-to-server health checks)
    if (!origin || allowedOrigins.includes(origin) || allowedOrigins.includes(origin.replace(/\/$/, ''))) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200,
};

// Cross-Origin Resource Sharing middleware (must run before all API routes)
app.use(cors(corsOptions));

// Explicit preflight handler for all routes
app.options(/.*/, cors(corsOptions));

// Security HTTP headers (configured to allow cross-origin requests from frontend)
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  })
);

// Body parser middleware for incoming JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Route Handlers
const healthRoutes = require('./routes/healthRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const subjectRoutes = require('./routes/subjectRoutes');
const skillRoutes = require('./routes/skillRoutes');
const careerRoutes = require('./routes/careerRoutes');
const roadmapRoutes = require('./routes/roadmapRoutes');
const alternativeCareerRoutes = require('./routes/alternativeCareerRoutes');
const savedCareerRoutes = require('./routes/savedCareerRoutes');
const roadmapProgressRoutes = require('./routes/roadmapProgressRoutes');

// Import Error Middleware
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

// Mount Routes
app.use('/api/health', healthRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/subjects', subjectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/careers', careerRoutes);
app.use('/api/roadmaps', roadmapRoutes);
app.use('/api/alternative-careers', alternativeCareerRoutes);
app.use('/api/saved-careers', savedCareerRoutes);
app.use('/api/roadmap-progress', roadmapProgressRoutes);

// Root route welcome message
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Career Explorer API',
    healthCheck: '/api/health',
  });
});

// 404 Handler for undefined routes
app.use(notFound);

// Centralized Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
