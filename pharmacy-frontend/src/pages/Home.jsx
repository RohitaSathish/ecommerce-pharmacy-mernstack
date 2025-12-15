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
        <div className="auth-buttons">
          <Link to="/login" className="btn btn-primary">Login</Link>
          <Link to="/register" className="btn btn-secondary">Register</Link>
        </div>
      </div>

      <div className="browse-section">
        <h3>Explore Our Medicine Collection</h3>
        <p>Discover a wide range of medicines and health products tailored for your needs.</p>
        <Link to="/medicines" className="btn btn-primary">Browse Medicines</Link>
      </div>
    </div>
  );
}

export default Home;
