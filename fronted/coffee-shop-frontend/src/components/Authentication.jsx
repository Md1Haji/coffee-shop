import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaEye, FaEyeSlash, FaGoogle, FaLock, FaUser } from 'react-icons/fa';

// Authentication Context
const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = JSON.parse(localStorage.getItem('coffee_user') || 'null');
    if (storedUser) {
      setUser(storedUser);
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('coffee_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('coffee_user');
  };

  const signup = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('coffee_user', JSON.stringify(userData));
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, signup, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Login/Signup Component
const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { login, signup } = React.useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!isLogin && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const userData = {
      name: formData.name || formData.email.split('@')[0],
      email: formData.email,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name || formData.email.split('@')[0])}&background=d4a574&color=fff&bold=true`
    };
    
    if (isLogin) {
      login(userData);
    } else {
      signup(userData);
    }
    
    setIsLoading(false);
  };

  const handleGoogleAuth = () => {
    // Simulate Google OAuth
    const userData = {
      name: 'Google User',
      email: 'user@gmail.com',
      avatar: 'https://ui-avatars.com/api/?name=Google+User&background=d4a574&color=fff&bold=true'
    };
    login(userData);
  };

  return (
    <div className="auth-container">
      <div className="auth-background">
        <div className="coffee-beans"></div>
        <div className="steam-animation">
          <div className="steam steam-1"></div>
          <div className="steam steam-2"></div>
          <div className="steam steam-3"></div>
        </div>
      </div>
      
      <div className="auth-content">
        <div className="auth-logo">
          <div className="logo-icon">☕</div>
          <h1>Café Aroma</h1>
          <p>Where every sip tells a story</p>
        </div>
        
        <div className="auth-card">
          <div className="auth-header">
            <h2>{isLogin ? 'Welcome Back' : 'Join Our Community'}</h2>
            <p>{isLogin ? 'Sign in to your account' : 'Create your account'}</p>
          </div>
          
          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <div className="input-group">
                <div className="input-wrapper">
                  <FaUser className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                  />
                </div>
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>
            )}
            
            <div className="input-group">
              <div className="input-wrapper">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
              </div>
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            
            <div className="input-group">
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? 'error' : ''}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>
            
            {!isLogin && (
              <div className="input-group">
                <div className="input-wrapper">
                  <FaLock className="input-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={errors.confirmPassword ? 'error' : ''}
                  />
                </div>
                {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
              </div>
            )}
            
            {isLogin && (
              <div className="auth-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>
            )}
            
            <button type="submit" className="auth-btn primary" disabled={isLoading}>
              {isLoading ? (
                <div className="loading-spinner"></div>
              ) : (
                isLogin ? 'Sign In' : 'Create Account'
              )}
            </button>
            
            <div className="auth-divider">
              <span>or</span>
            </div>
            
            <button type="button" className="auth-btn google" onClick={handleGoogleAuth}>
              <FaGoogle />
              Continue with Google
            </button>
          </form>
          
          <div className="auth-footer">
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button 
                type="button" 
                className="auth-switch"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default AuthScreen;
export { AuthContext, AuthProvider }; // <-- So it can be imported in App.js

