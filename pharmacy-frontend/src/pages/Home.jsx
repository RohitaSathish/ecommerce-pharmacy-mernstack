import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../App";

function Home() {
  const { isLoggedIn } = useAuth();
  
  return (
    <div className="container">
      <div className="intro-section">
        <div style={{ marginBottom: '2em' }}>
          <div style={{ textAlign: 'center' }}>
            <h2>Welcome to Our Pharmacy Store</h2>
            <p>
              Your trusted online pharmacy for quality medicines and healthcare products.
              We offer fast delivery, competitive prices, and expert advice to keep you healthy.
            </p>
          </div>
        </div>
        <p style={{ textAlign: 'center', fontSize: '1.1em', lineHeight: '1.6' }}>
          Our pharmacy is committed to providing safe, effective, and affordable medications
          with professional consultation available 24/7.
        </p>
        {!isLoggedIn && (
          <div style={{ textAlign: 'center', marginTop: '2em' }}>
            <Link to="/login" className="btn btn-primary" style={{ fontSize: '1.2em', padding: '1em 2em' }}>Login</Link>
            <div style={{ marginTop: '1em' }}>
              <Link to="/register" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>New User / Create Account</Link>
            </div>
          </div>
        )}
      </div>
      
      <div style={{ marginTop: '3em', padding: '2em', backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px' }}>

        <h3 style={{ color: 'var(--primary-color)', textAlign: 'center', marginBottom: '1.5em' }}>Medicine Safety & Awareness</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2em' }}>
          <div>
            <h4 style={{ color: 'var(--dark-color)' }}>💊 General Precautions</h4>
            <ul style={{ lineHeight: '1.6' }}>
              <li>Always consult a doctor before taking any medication</li>
              <li>Read medicine labels and expiry dates carefully</li>
              <li>Store medicines in cool, dry places away from children</li>
              <li>Never share prescription medicines with others</li>
              <li>Complete the full course of antibiotics as prescribed</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--dark-color)' }}>⚠️ Important Warnings</h4>
            <ul style={{ lineHeight: '1.6' }}>
              <li>Avoid self-medication for serious conditions</li>
              <li>Check for drug allergies before taking new medicines</li>
              <li>Don't exceed recommended dosages</li>
              <li>Inform doctors about all medicines you're taking</li>
              <li>Seek immediate help for adverse reactions</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--dark-color)' }}>🏥 When to Consult a Doctor</h4>
            <ul style={{ lineHeight: '1.6' }}>
              <li>Persistent fever above 101°F (38.3°C)</li>
              <li>Severe pain or unusual symptoms</li>
              <li>Breathing difficulties or chest pain</li>
              <li>Signs of infection or allergic reactions</li>
              <li>Chronic conditions requiring monitoring</li>
            </ul>
          </div>
        </div>
        
        <div style={{ marginTop: '2em', padding: '1em', backgroundColor: 'rgba(108, 155, 207, 0.1)', borderRadius: '6px', textAlign: 'center' }}>
          <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--primary-color)' }}>
            Remember: Your health is precious. Always prioritize professional medical advice over convenience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
