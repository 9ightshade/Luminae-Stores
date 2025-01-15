import { useState, useContext, createContext, useEffect } from 'react';

// Create context
const AuthContext = createContext(null);

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is already logged in on mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Check local storage for existing auth token
  const checkAuthStatus = () => {
    try {
      const token = localStorage.getItem('auth_token');
      const storedUser = localStorage.getItem('user');
      
      if (token && storedUser) {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Auth status check failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Login
  const login = async (email, password) => {
    try {
      setIsLoading(true);
      // Mock API call - replace with your actual API
      const response = await fetch('https://api.mock.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store auth data
      localStorage.setItem('auth_token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      setUser(data.user);
      setIsAuthenticated(true);

      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        error: error.message || 'Login failed'
      };
    } finally {
      setIsLoading(false);
    }
  };

  // Register
  const register = async (userData) => {
    try {
      setIsLoading(true);
      // Mock API call - replace with your actual API
      const response = await fetch('https://api.mock.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Automatically log in after successful registration
      return login(userData.email, userData.password);
    } catch (error) {
      console.error('Registration error:', error);
      return {
        success: false,
        error: error.message || 'Registration failed'
      };
    } finally {
      setIsLoading(false);
    }
  };

  // Logout
  const logout = () => {
    try {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
      setUser(null);
      setIsAuthenticated(false);
      return { success: true };
    } catch (error) {
      console.error('Logout error:', error);
      return {
        success: false,
        error: error.message || 'Logout failed'
      };
    }
  };

  // Update user profile
  const updateProfile = async (updatedData) => {
    try {
      setIsLoading(true);
      // Mock API call - replace with your actual API
      const response = await fetch('https://api.mock.com/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
        },
        body: JSON.stringify(updatedData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Profile update failed');
      }

      // Update stored user data
      const updatedUser = { ...user, ...data.user };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);

      return { success: true, user: updatedUser };
    } catch (error) {
      console.error('Profile update error:', error);
      return {
        success: false,
        error: error.message || 'Profile update failed'
      };
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
    updateProfile
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook for using auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};