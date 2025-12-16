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

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Medicines from "./pages/Medicines";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <header style={{
        backgroundColor: 'rgba(108, 155, 207, 0.9)', /* Milder with transparency */
        color: 'white',
        padding: '1em',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(5px)' /* Subtle blur */
      }}>
        <h1 style={{ margin: 0, fontSize: '1.8em' }}>Pharmacy Store</h1>
        <nav>
          <Link to="/" style={{ color: 'white', margin: '0 1em', textDecoration: 'none' }}>Home</Link>
          <Link to="/login" style={{ color: 'white', margin: '0 1em', textDecoration: 'none' }}>Login</Link>
          <Link to="/register" style={{ color: 'white', margin: '0 1em', textDecoration: 'none' }}>Register</Link>
          <Link to="/medicines" style={{ color: 'white', margin: '0 1em', textDecoration: 'none' }}>Browse Medicines</Link>
          <Link to="/contact" style={{ color: 'white', margin: '0 1em', textDecoration: 'none' }}>Contact</Link>
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
      </Routes>
      <footer style={{
        backgroundColor: 'rgba(74, 92, 106, 0.9)', /* Milder dark with transparency */
        color: 'white',
        textAlign: 'center',
        padding: '1em',
        marginTop: 'auto',
        backdropFilter: 'blur(5px)'
      }}>
        <p>&copy; 2025 Pharmacy Store. All rights reserved.</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;

