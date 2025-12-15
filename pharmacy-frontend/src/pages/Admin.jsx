import React, { useState } from "react";

function Admin() {
  const [newMedicine, setNewMedicine] = useState({
    name: "",
    price: ""
  });

  const handleChange = (e) => {
    setNewMedicine({ ...newMedicine, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Medicine:", newMedicine);
    // Here you would typically send to backend
    alert("Medicine added successfully!");
    setNewMedicine({ name: "", price: "" });
  };

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>

      <div className="admin-section">
        <h3>Add New Medicine</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Medicine Name"
            value={newMedicine.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price (₹)"
            value={newMedicine.price}
            onChange={handleChange}
            required
          />
          <button type="submit">Add Medicine</button>
        </form>
      </div>

      <div className="admin-section">
        <h3>Manage Medicines</h3>
        <p>View and edit existing medicines here.</p>
        {/* You can add a list of medicines with edit/delete buttons */}
      </div>

      <div className="admin-section">
        <h3>User Management</h3>
        <p>Manage registered users.</p>
        {/* Add user list functionality */}
      </div>
    </div>
  );
}

export default Admin;