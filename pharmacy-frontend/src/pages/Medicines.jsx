import React, { useState } from "react";
import { useCart } from "../CartContext";

function Medicines() {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");

  const medicines = [
    { id: 1, name: "Paracetamol", brand: "Dolo", dosage: "650mg", price: 20, purpose: "Pain relief and fever reduction", rating: 4.5, image: "https://tiimg.tistatic.com/fp/1/007/442/paracetamol-dolo-650-mg-tablets--885.jpg" },
    { id: 2, name: "Cough Syrup", brand: "Benadryl", dosage: "100ml", price: 80, purpose: "Treats cough and throat irritation", rating: 4.2, image: "https://www.practostatic.com/practopedia-images/v3/res-750/benadryl-cough-formula-cold-cough-150ml_48475b31-815b-4164-bf51-ca14c5d2cdfd.JPG" },
    { id: 3, name: "Vitamin C", brand: "Limcee", dosage: "500mg", price: 120, purpose: "Immune system support and antioxidant", rating: 4.7, image: "https://www.bbassets.com/media/uploads/p/l/40323622_1-limcee-vitamin-c-chewable-tablet-500-mg-orange-flavour.jpg" },
    { id: 4, name: "Ibuprofen", brand: "Brufen", dosage: "400mg", price: 15, purpose: "Anti-inflammatory and pain relief", rating: 4.3, image: "https://mygenericstore.com/wp-content/uploads/2024/01/brufen_400mg_1-scaled.jpg" },
    { id: 5, name: "Aspirin", brand: "Disprin", dosage: "325mg", price: 10, purpose: "Pain relief and blood thinning", rating: 4.1, image: "https://tiimg.tistatic.com/fp/1/007/765/disprin-regular-325-mg-tablet-122.jpg" },
    { id: 6, name: "Amoxicillin", brand: "Novamox", dosage: "500mg", price: 150, purpose: "Antibiotic for bacterial infections", rating: 4.6, image: "https://tse3.mm.bing.net/th/id/OIP.enUaQnAxdkx26PE8z8bEowHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 7, name: "Cetirizine", brand: "Zyrtec", dosage: "10mg", price: 25, purpose: "Allergy relief and antihistamine", rating: 4.4, image: "https://tse1.mm.bing.net/th/id/OIP.Oq9LOCaYiSd2IN_hOkOboAAAAA?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 8, name: "Omeprazole", brand: "Prilosec", dosage: "20mg", price: 40, purpose: "Acid reflux and stomach ulcer treatment", rating: 4.5, image: "https://athome.medline.com/media/catalog/product/cache/629a5912a555bf7b815eea5423d5ef47/s/k/sku_otc045502_box_front_001_rgb.jpg" },
    { id: 9, name: "Metformin", brand: "Glucophage", dosage: "500mg", price: 30, purpose: "Type 2 diabetes management", rating: 4.3, image: "https://nhathuocanphuoc.com.vn/upload/product/thuoc-glucophage-500mg-2945.jpg" },
    { id: 10, name: "Losartan", brand: "Cozaar", dosage: "50mg", price: 35, purpose: "High blood pressure treatment", rating: 4.2, image: "https://nhathuocanphuoc.com.vn/upload/product/thuoc-cozaar-50mg-losartan-hop-28-vien-7412.jpg" },
    { id: 11, name: "Atorvastatin", brand: "Lipitor", dosage: "20mg", price: 50, purpose: "Cholesterol reduction", rating: 4.6, image: "https://medihub.pk/wp-content/uploads/2022/10/LIPITOR-TAB-20-MG-10S.webp" },
    { id: 12, name: "Levothyroxine", brand: "Synthroid", dosage: "100mcg", price: 45, purpose: "Thyroid hormone replacement", rating: 4.4, image: "https://tse1.mm.bing.net/th/id/OIP._aKl8ez1D40gof-QHQ0LUwHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 13, name: "Albuterol Inhaler", brand: "Ventolin", dosage: "100mcg", price: 200, purpose: "Asthma and breathing difficulties", rating: 4.8, image: "https://mimsshst.blob.core.windows.net/drug-resources/ID/packshot/Ventolin%20Inhaler6001PPS0.JPG" },
    { id: 14, name: "Insulin", brand: "Humulin", dosage: "10ml", price: 300, purpose: "Diabetes blood sugar control", rating: 4.7, image: "https://th.bing.com/th/id/R.888d37548ba5257ed9fdb924560925f5?rik=6d8bDzXNmlmvUw&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f1100%2f7048%2fproducts%2fHumulin_R_U-100_Insulin_2048x2048_c1fedcc0-e9b7-4cf9-b520-345cef78db21_1200x1200.jpg%3fv%3d1618439131&ehk=%2b%2bYhZ4QN%2fk211QnuaRFQbiOh9hYUgFdnJL1OpRGgUk8%3d&risl=&pid=ImgRaw&r=0" },
    { id: 15, name: "Warfarin", brand: "Coumadin", dosage: "5mg", price: 55, purpose: "Blood clot prevention", rating: 4.1, image: "https://tse2.mm.bing.net/th/id/OIP.PBUolQV4-g8YIw7LWwG1mgHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 16, name: "Digoxin", brand: "Lanoxin", dosage: "0.25mg", price: 60, purpose: "Heart rhythm and heart failure treatment", rating: 4.0, image: "https://www.practostatic.com/practopedia-images/v3/res-750/lanoxin-0-25mg-tablet-10-s_74228a06-6fd5-4531-89f5-b9f28614e18a.JPG" },
    { id: 17, name: "Furosemide", brand: "Lasix", dosage: "40mg", price: 20, purpose: "Fluid retention and swelling reduction", rating: 4.3, image: "https://k2pharmacy.ph/cdn/shop/files/Lasix_40mgTablet-Resized1-Edit.jpg?v=1711514701" },
    { id: 18, name: "Prednisone", brand: "Deltasone", dosage: "10mg", price: 28, purpose: "Inflammation and immune system suppression", rating: 4.2, image: "https://prescriptiongiant.com/wp-content/uploads/2018/07/Deltasone.jpeg" },
    { id: 19, name: "Gabapentin", brand: "Neurontin", dosage: "300mg", price: 70, purpose: "Nerve pain and seizure treatment", rating: 4.4, image: "https://th.bing.com/th/id/OIP.thpL01dIgYbkEMrPeSHGRgHaFM?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 20, name: "Sertraline", brand: "Zoloft", dosage: "50mg", price: 65, purpose: "Depression and anxiety treatment", rating: 4.5, image: "https://www.assetpharmacy.com/wp-content/uploads/2022/04/Zoloft-50mg-Capsules-15-Capsules-2-1024x1024.jpg" }
  ];

  const handleAddToCart = (med) => {
    addToCart(med);
    alert(`${med.name} added to cart!`);
  };

  const filteredMedicines = medicines.filter(medicine =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medicine.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medicine.purpose.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Available Medicines</h2>
      
      <input
        type="text"
        placeholder="Search medicines by name, brand, or purpose..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '0.75em',
          marginBottom: '2em',
          border: '1px solid var(--border-color)',
          borderRadius: '6px',
          fontSize: '1em'
        }}
      />

      <div className="medicine-list">
        {filteredMedicines.map((med) => (
          <div key={med.id} className="medicine-card">
            <img 
              src={med.image} 
              alt={med.name}
              style={{ 
                width: '100%', 
                height: '120px', 
                objectFit: 'contain', 
                borderRadius: '6px', 
                marginBottom: '0.5em' 
              }}
            />
            <h3>{med.name} ({med.dosage})</h3>
            <p style={{ fontSize: '0.85em', fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '0.3em' }}>Brand: {med.brand}</p>
            <p style={{ fontSize: '0.9em', color: 'var(--secondary-color)', marginBottom: '0.5em' }}>{med.purpose}</p>
            <p style={{ fontSize: '1.2em', fontWeight: 'bold', color: 'var(--primary-color)', textAlign: 'center', margin: '0.5em 0' }}>₹ {med.price}</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1em' }}>
              <span style={{ color: '#FFD700', marginRight: '0.3em' }}>★</span>
              <span style={{ fontSize: '0.9em', color: 'var(--dark-color)' }}>{med.rating}</span>
            </div>
            <button onClick={() => handleAddToCart(med)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Medicines;
