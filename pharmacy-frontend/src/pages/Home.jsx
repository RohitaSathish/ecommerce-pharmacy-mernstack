import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="intro-section">
        <h2>Welcome to Our Pharmacy Store</h2>
        <p>
          Your trusted online pharmacy for quality medicines and healthcare products.
          We offer fast delivery, competitive prices, and expert advice to keep you healthy.
          Our pharmacy is committed to providing safe, effective, and affordable medications
          with professional consultation available 24/7.
        </p>
        <div style={{ textAlign: 'center', marginTop: '2em' }}>
          <Link to="/login" className="btn btn-primary" style={{ fontSize: '1.2em', padding: '1em 2em' }}>Login</Link>
          <div style={{ marginTop: '1em' }}>
            <Link to="/register" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>New User / Create Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
