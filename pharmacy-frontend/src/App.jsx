// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React, { useState, createContext, useContext } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Medicines from "./pages/Medicines";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Orders from "./pages/Orders";
import { CartProvider } from "./CartContext";
import { UserProvider } from "./UserContext";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AppContent() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <header style={{
        backgroundColor: 'rgba(108, 155, 207, 0.9)', /* Milder with transparency */
        color: 'white',
        padding: '1em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(5px)', /* Subtle blur */
        position: 'relative'
      }}>
        <h1 style={{ margin: 0, fontSize: '2.5em', fontFamily: 'Times New Roman, serif' }}>MediCare</h1>
        <nav style={{ position: 'absolute', right: '1em' }}>
          {isLoggedIn && (
            <>
              <Link to="/medicines" style={{ color: 'white', margin: '0 1em', textDecoration: 'none' }}>Browse Medicines</Link>
              <Link to="/cart" style={{ color: 'white', margin: '0 1em', textDecoration: 'none' }}>Cart</Link>
              <Link to="/orders" style={{ color: 'white', margin: '0 1em', textDecoration: 'none' }}>Orders</Link>
              <Link to="/contact" style={{ color: 'white', margin: '0 1em', textDecoration: 'none' }}>Contact</Link>
              <button onClick={handleLogout} style={{ color: 'white', margin: '0 1em', background: 'none', border: 'none', cursor: 'pointer' }}>Logout</button>
            </>
          )}
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <footer style={{
        backgroundColor: 'rgba(74, 92, 106, 0.9)', /* Milder dark with transparency */
        color: 'white',
        textAlign: 'center',
        padding: '1em',
        marginTop: 'auto',
        backdropFilter: 'blur(5px)'
      }}>
        <p>&copy; 2025 MediCare. All rights reserved.</p>
      </footer>
    </>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <UserProvider>
        <CartProvider>
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </CartProvider>
      </UserProvider>
    </AuthContext.Provider>
  );
}

export default App;
