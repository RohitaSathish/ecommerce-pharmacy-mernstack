import React from "react";
import { useCart } from "../CartContext";
import { useMedicines } from "../MedicineContext";

function Medicines() {
  const { addToCart } = useCart();
  const { medicines } = useMedicines();

  const handleAddToCart = (med) => {
    addToCart(med);
    alert(`${med.name} added to cart!`);
  };

  return (
    <div className="container">
      <h2>Available Medicines</h2>

      <div className="medicine-list">
        {medicines.map((med) => (
          <div key={med.id} className="medicine-card">
            <img src={med.image} alt={med.name} style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '8px', margin: '0 auto 1em auto', display: 'block' }} />
            <h3>{med.name} <span style={{ fontSize: '0.8em', color: 'var(--secondary-color)', fontWeight: 'normal' }}>({med.dosage})</span></h3>
            <p style={{ fontSize: '0.9em', color: 'var(--secondary-color)', marginBottom: '0.5em' }}>Brand: {med.brand}</p>
            <div style={{ textAlign: 'center', marginBottom: '0.5em' }}>
              <p style={{ fontSize: '1.2em', fontWeight: 'bold', color: 'var(--primary-color)', margin: '0.5em 0' }}>₹ {med.price}</p>
              <p style={{ color: '#ffa500', margin: '0.5em 0' }}>★ {med.rating}/5</p>
            </div>
            <div style={{ marginBottom: '1em', textAlign: 'left' }}>
              <p><strong>Purpose:</strong> {med.purpose}</p>
            </div>
            <button onClick={() => handleAddToCart(med)} style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Medicines;
