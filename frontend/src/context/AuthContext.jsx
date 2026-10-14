import React, { createContext, useContext, useState, useEffect } from 'react';
import authService from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => {
    try {
      return localStorage.getItem('token') || null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(true);

  // Restore authenticated session once on initial mount
  useEffect(() => {
    let isMounted = true;

    const restoreSession = async () => {
      let storedToken = null;
      try {
        storedToken = localStorage.getItem('token');
      } catch (e) {
        console.warn('Could not read token from localStorage:', e);
      }

      if (storedToken) {
        try {
          const res = await authService.getMe();
          if (res?.success && res?.data && isMounted) {
            setUser(res.data);
            setToken(storedToken);
          } else if (isMounted) {
            localStorage.removeItem('token');
            setToken(null);
            setUser(null);
          }
        } catch (err) {
          console.warn('Session restoration failed:', err.message);
          if (isMounted) {
            localStorage.removeItem('token');
            setToken(null);
            setUser(null);
          }
        }
      }

      if (isMounted) {
        setLoading(false);
      }
    };

    restoreSession();

    return () => {
      isMounted = false;
    };
  }, []);

  const login = async (email, password) => {
    const res = await authService.login(email, password);
    const tokenVal = res?.data?.token;
    if (res?.success && tokenVal) {
      try {
        localStorage.setItem('token', tokenVal);
      } catch (e) {
        console.warn('Failed to save token to localStorage:', e);
      }
      setToken(tokenVal);
      setUser(res.data);
      setLoading(false);
    }
    return res;
  };

  const register = async (name, email, password) => {
    const res = await authService.register(name, email, password);
    const tokenVal = res?.data?.token;
    if (res?.success && tokenVal) {
      try {
        localStorage.setItem('token', tokenVal);
      } catch (e) {
        console.warn('Failed to save token to localStorage:', e);
      }
      setToken(tokenVal);
      setUser(res.data);
      setLoading(false);
    }
    return res;
  };

  const logout = () => {
    try {
      localStorage.removeItem('token');
    } catch (e) {
      console.warn('Failed to remove token from localStorage:', e);
    }
    setToken(null);
    setUser(null);
    setLoading(false);
  };

  const updateProfile = async (name, password) => {
    const res = await authService.updateProfile(name, password);
    if (res?.success && res?.data) {
      setUser((prev) => ({ ...prev, name: res.data.name }));
    }
    return res;
  };

  const value = {
    user,
    token,
    loading,
    login,
    register,
    logout,
    updateProfile,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
