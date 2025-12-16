import React, { useState } from "react";
import { useUser } from "../UserContext";
import { useAuth } from "../App";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [medicines, setMedicines] = useState([
    { id: 1, name: "Paracetamol", price: 20 },
    { id: 2, name: "Cough Syrup", price: 80 },
    { id: 3, name: "Vitamin C", price: 120 },
    { id: 4, name: "Ibuprofen", price: 15 },
    { id: 5, name: "Aspirin", price: 10 }
  ]);
  const [newMedicine, setNewMedicine] = useState({
    name: "",
    price: ""
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [editingMedicine, setEditingMedicine] = useState(null);
  const { users } = useUser();
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewMedicine({ ...newMedicine, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = Math.max(...medicines.map(m => m.id)) + 1;
    setMedicines([...medicines, { id: newId, ...newMedicine, price: Number(newMedicine.price) }]);
    alert("Medicine added successfully!");
    setNewMedicine({ name: "", price: "" });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this medicine?")) {
      setMedicines(medicines.filter(med => med.id !== id));
      alert("Medicine deleted successfully!");
    }
  };

  const handleEdit = (medicine) => {
    setEditingMedicine(medicine);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setMedicines(medicines.map(med => 
      med.id === editingMedicine.id ? editingMedicine : med
    ));
    setEditingMedicine(null);
    alert("Medicine updated successfully!");
  };

  const filteredMedicines = medicines.filter(medicine =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2em' }}>
        <h2>Admin Dashboard</h2>
        <button 
          onClick={handleLogout}
          style={{ 
            backgroundColor: '#dc3545', 
            color: 'white', 
            border: 'none', 
            padding: '0.5em 1em', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          Logout
        </button>
      </div>

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
        <input
          type="text"
          placeholder="Search medicines..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: '1em', padding: '0.5em', width: '100%' }}
        />
        
        {editingMedicine && (
          <div style={{ backgroundColor: '#f0f0f0', padding: '1em', marginBottom: '1em', borderRadius: '5px' }}>
            <h4>Edit Medicine</h4>
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                value={editingMedicine.name}
                onChange={(e) => setEditingMedicine({...editingMedicine, name: e.target.value})}
                required
                style={{ marginRight: '0.5em', padding: '0.5em' }}
              />
              <input
                type="number"
                value={editingMedicine.price}
                onChange={(e) => setEditingMedicine({...editingMedicine, price: Number(e.target.value)})}
                required
                style={{ marginRight: '0.5em', padding: '0.5em' }}
              />
              <button type="submit" style={{ marginRight: '0.5em' }}>Update</button>
              <button type="button" onClick={() => setEditingMedicine(null)}>Cancel</button>
            </form>
          </div>
        )}
        
        {searchTerm && (
          <div style={{ display: 'grid', gap: '1em' }}>
            {filteredMedicines.map(medicine => (
              <div key={medicine.id} style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '1em',
                border: '1px solid #ddd',
                borderRadius: '5px'
              }}>
                <div>
                  <strong>{medicine.name}</strong> - ₹{medicine.price}
                </div>
                <div>
                  <button 
                    onClick={() => handleEdit(medicine)}
                    style={{ marginRight: '0.5em', backgroundColor: '#007bff', color: 'white', border: 'none', padding: '0.5em', borderRadius: '3px' }}
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(medicine.id)}
                    style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '0.5em', borderRadius: '3px' }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="admin-section">
        <h3>User Management</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1em' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <th style={{ padding: '0.75em', border: '1px solid #ddd', textAlign: 'left' }}>ID</th>
                <th style={{ padding: '0.75em', border: '1px solid #ddd', textAlign: 'left' }}>Name</th>
                <th style={{ padding: '0.75em', border: '1px solid #ddd', textAlign: 'left' }}>Email</th>
                <th style={{ padding: '0.75em', border: '1px solid #ddd', textAlign: 'left' }}>Registered Date</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td style={{ padding: '0.75em', border: '1px solid #ddd' }}>{user.id}</td>
                  <td style={{ padding: '0.75em', border: '1px solid #ddd' }}>{user.name}</td>
                  <td style={{ padding: '0.75em', border: '1px solid #ddd' }}>{user.email}</td>
                  <td style={{ padding: '0.75em', border: '1px solid #ddd' }}>{user.registeredDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;