import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ProtectedRoute from './components/common/ProtectedRoute';
import AdminRoute from './components/common/AdminRoute';
import LoadingSpinner from './components/common/LoadingSpinner';
import ErrorBoundary from './components/common/ErrorBoundary';

// Pages
import CareersPage from './pages/CareersPage';
import CareerDetailPage from './pages/CareerDetailPage';
import CategoriesPage from './pages/CategoriesPage';
import SavedCareersPage from './pages/SavedCareersPage';
import MyProgressPage from './pages/MyProgressPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import NotFoundPage from './pages/NotFoundPage';

// Import CSS Design System
import './styles/index.css';

/**
 * RootRedirect handles the initial landing:
 * Unauthenticated visitors are routed to /login first.
 * Authenticated users are routed to /careers (Explore Careers).
 */
const RootRedirect = () => {
  const { isAuthenticated, loading } = useAuth();
  if (loading) {
    return <LoadingSpinner message="Loading Career Explorer..." />;
  }
  return isAuthenticated ? <Navigate to="/careers" replace /> : <Navigate to="/login" replace />;
};

/**
 * PublicOnlyRoute redirects authenticated users away from Login/Register to /careers.
 */
const PublicOnlyRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  if (loading) {
    return <LoadingSpinner message="Checking authentication status..." />;
  }
  return isAuthenticated ? <Navigate to="/careers" replace /> : children;
};

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-page)', color: 'var(--text-body)' }}>
              <Navbar />
              <main style={{ flex: 1 }}>
                <ErrorBoundary>
                  <Routes>
                    {/* Initial Entry Route: Unauthenticated -> Login, Authenticated -> Explore Careers */}
                    <Route path="/" element={<RootRedirect />} />

                    {/* Authentication Routes (Public Only) */}
                    <Route
                      path="/login"
                      element={
                        <PublicOnlyRoute>
                          <LoginPage />
                        </PublicOnlyRoute>
                      }
                    />
                    <Route
                      path="/register"
                      element={
                        <PublicOnlyRoute>
                          <RegisterPage />
                        </PublicOnlyRoute>
                      }
                    />

                    {/* Protected Career Discovery Routes */}
                    <Route
                      path="/careers"
                      element={
                        <ProtectedRoute>
                          <CareersPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/careers/:slug"
                      element={
                        <ProtectedRoute>
                          <CareerDetailPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/categories"
                      element={
                        <ProtectedRoute>
                          <CategoriesPage />
                        </ProtectedRoute>
                      }
                    />

                    {/* Protected User Dashboard Routes */}
                    <Route
                      path="/saved"
                      element={
                        <ProtectedRoute>
                          <SavedCareersPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/progress"
                      element={
                        <ProtectedRoute>
                          <MyProgressPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/profile"
                      element={
                        <ProtectedRoute>
                          <ProfilePage />
                        </ProtectedRoute>
                      }
                    />

                    {/* Protected Admin Console Routes */}
                    <Route
                      path="/admin"
                      element={
                        <AdminRoute>
                          <AdminDashboardPage />
                        </AdminRoute>
                      }
                    />

                    {/* 404 Route */}
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </ErrorBoundary>
              </main>
              <Footer />
            </div>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
