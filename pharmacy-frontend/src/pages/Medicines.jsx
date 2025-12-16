import React, { useState } from "react";

function Medicines() {
  const [cart, setCart] = useState([]);

  const medicines = [
    { id: 1, name: "Paracetamol", price: 20 },
    { id: 2, name: "Cough Syrup", price: 80 },
    { id: 3, name: "Vitamin C", price: 120 },
    { id: 4, name: "Ibuprofen", price: 15 },
    { id: 5, name: "Aspirin", price: 10 },
    { id: 6, name: "Amoxicillin", price: 150 },
    { id: 7, name: "Cetirizine", price: 25 },
    { id: 8, name: "Omeprazole", price: 40 },
    { id: 9, name: "Metformin", price: 30 },
    { id: 10, name: "Losartan", price: 35 },
    { id: 11, name: "Atorvastatin", price: 50 },
    { id: 12, name: "Levothyroxine", price: 45 },
    { id: 13, name: "Albuterol Inhaler", price: 200 },
    { id: 14, name: "Insulin", price: 300 },
    { id: 15, name: "Warfarin", price: 55 },
    { id: 16, name: "Digoxin", price: 60 },
    { id: 17, name: "Furosemide", price: 20 },
    { id: 18, name: "Prednisone", price: 28 },
    { id: 19, name: "Gabapentin", price: 70 },
    { id: 20, name: "Sertraline", price: 65 }
  ];

  const addToCart = (med) => {
    setCart([...cart, med]);
    alert(`${med.name} added to cart!`);
  };

  return (
    <div className="container">
      <h2>Available Medicines</h2>

      <div className="medicine-list">
        {medicines.map((med) => (
          <div key={med.id} className="medicine-card">
            <h3>{med.name}</h3>
            <p>₹ {med.price}</p>
            <button onClick={() => addToCart(med)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Medicines;
