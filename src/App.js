import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useCallback } from 'react';

import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import AboutPage from './components/AboutPage';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import SingleProduct from './components/SingleProduct';
import Footer from './components/Footer';
import { CartProvider } from './components/Cart/CartContext'; 

 
// ✅ Main App inside Router
function MainApp() {
  const navigate = useNavigate();

  // ✅ Fixed with useCallback (removes ESLint warning)
  const handleLogout = useCallback(() => {
    localStorage.clear();
    navigate("/login");
  }, [navigate]);

  // ✅ Session expiry (30 mins)
  useEffect(() => {
    const checkSession = () => {
      const loginTime = localStorage.getItem("loginTime");

      if (loginTime) {
        const diff = Date.now() - loginTime;

        if (diff > 30 * 60 * 1000) {
          handleLogout();
        }
      }
    };

    checkSession();
    const interval = setInterval(checkSession, 1000);

    return () => clearInterval(interval);
  }, [handleLogout]);

  // ✅ Inactivity logout (30 mins)
  useEffect(() => {
    let timeout;

    const resetTimer = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        handleLogout();
      }, 30 * 60 * 1000);
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keypress", resetTimer);

    resetTimer();

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keypress", resetTimer);
    };
  }, [handleLogout]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<ProtectedRoute><Products/></ProtectedRoute>}/>
        <Route path='/product/:id' element={<ProtectedRoute><SingleProduct/></ProtectedRoute>}/>
        <Route path='/aboutpage' element={<AboutPage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </>
  );
}


// ✅ Wrapper App
function App() {
  return (
    <CartProvider>
      <Router>
        <MainApp />
      </Router>
    </CartProvider>
  );
}

export default App;