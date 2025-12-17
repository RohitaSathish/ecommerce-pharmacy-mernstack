import React, { createContext, useContext, useState } from "react";

const MedicineContext = createContext();

export const useMedicines = () => {
  return useContext(MedicineContext);
};

export const MedicineProvider = ({ children }) => {
  const [medicines, setMedicines] = useState([
    { id: 1, name: "Paracetamol", dosage: "650mg", brand: "Dolo", price: 20, rating: 4.5, purpose: "Pain relief and fever reduction", image: "https://tiimg.tistatic.com/fp/1/007/442/paracetamol-dolo-650-mg-tablets--885.jpg" },
    { id: 2, name: "Cough Syrup", dosage: "100ml", brand: "Benadryl", price: 80, rating: 4.2, purpose: "Treats cough and throat irritation", image: "https://www.practostatic.com/practopedia-images/v3/res-750/benadryl-cough-formula-cold-cough-150ml_48475b31-815b-4164-bf51-ca14c5d2cdfd.JPG" },
    { id: 3, name: "Vitamin C", dosage: "1000mg", brand: "Limcee", price: 120, rating: 4.7, purpose: "Immune system support and antioxidant", image: "https://www.bbassets.com/media/uploads/p/l/40323622_1-limcee-vitamin-c-chewable-tablet-500-mg-orange-flavour.jpg" },
    { id: 4, name: "Ibuprofen", dosage: "400mg", brand: "Brufen", price: 15, rating: 4.3, purpose: "Anti-inflammatory and pain relief", image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438682358/MA/IB/IW/10526113/brufen-400mg-ibuprofen-tablets-500x500.png" },
    { id: 5, name: "Aspirin", dosage: "75mg", brand: "Disprin", price: 10, rating: 4.1, purpose: "Pain relief and blood thinning", image: "https://tse1.mm.bing.net/th/id/OIP.OTuWUEhB5n7jmm6sSMWfrAHaHa?pid=Api&P=0&h=180" },
    { id: 6, name: "Amoxicillin", dosage: "500mg", brand: "Novamox", price: 150, rating: 4.6, purpose: "Antibiotic for bacterial infections", image: "https://tse4.mm.bing.net/th/id/OIP.siM90mMEgHIWbd2j3p23RwHaHa?pid=Api&P=0&h=180" },
    { id: 7, name: "Cetirizine", dosage: "10mg", brand: "Zyrtec", price: 25, rating: 4.4, purpose: "Antihistamine for allergies", image: "https://tse1.mm.bing.net/th/id/OIP.bZdsfz-EkxQw5Cc1dMh7WgHaFS?pid=Api&P=0&h=180" },
    { id: 8, name: "Omeprazole", dosage: "20mg", brand: "Prilosec", price: 40, rating: 4.5, purpose: "Reduces stomach acid production", image: "https://tse2.mm.bing.net/th/id/OIP.4oavfR8Ekv-GfMPbSsTa8gHaHa?pid=Api&P=0&h=180" },
    { id: 9, name: "Metformin", dosage: "500mg", brand: "Glucophage", price: 30, rating: 4.3, purpose: "Controls blood sugar in diabetes", image: "https://tse3.mm.bing.net/th/id/OIP.Tsnt5lF6dug0mrvwwXlu9AHaHG?pid=Api&P=0&h=180" },
    { id: 10, name: "Losartan", dosage: "50mg", brand: "Cozaar", price: 35, rating: 4.2, purpose: "Treats high blood pressure", image: "https://nhathuocanphuoc.com.vn/upload/product/thuoc-cozaar-50mg-losartan-hop-28-vien-7412.jpg" },
    { id: 11, name: "Atorvastatin", dosage: "20mg", brand: "Lipitor", price: 50, rating: 4.4, purpose: "Lowers cholesterol levels", image: "https://medihub.pk/wp-content/uploads/2022/10/LIPITOR-TAB-20-MG-10S.webp" },
    { id: 12, name: "Levothyroxine", dosage: "100mcg", brand: "Synthroid", price: 45, rating: 4.6, purpose: "Treats underactive thyroid", image: "https://tse3.mm.bing.net/th/id/OIP.OwCtxvKMkPFTfx1e-8yXoQAAAA?pid=Api&P=0&h=180" },
    { id: 13, name: "Albuterol Inhaler", dosage: "200mcg", brand: "Ventolin", price: 200, rating: 4.8, purpose: "Treats asthma and breathing problems", image: "https://tse2.mm.bing.net/th/id/OIP.8o9ihd_ge-M7QY2L5u18NgHaH5?pid=Api&P=0&h=180" },
    { id: 14, name: "Insulin", dosage: "10ml", brand: "Humulin", price: 300, rating: 4.7, purpose: "Controls blood sugar in diabetes", image: "https://tse2.mm.bing.net/th/id/OIP.u_7x62T6F_7u3bXSNfzlLwHaHa?pid=Api&P=0&h=180" },
    { id: 15, name: "Warfarin", dosage: "5mg", brand: "Coumadin", price: 55, rating: 4.0, purpose: "Blood thinner to prevent clots", image: "https://cdn.shop-apotheke.com/images/D11/054/430/D11054430-p14.jpg" },
    { id: 16, name: "Digoxin", dosage: "0.25mg", brand: "Lanoxin", price: 60, rating: 4.1, purpose: "Treats heart failure and irregular heartbeat", image: "https://medsgo.ph/images/detailed/18/Lanoxin_Paediatric_50_mcg_ml_Elixir_Syrup.jpg" },
    { id: 17, name: "Furosemide", dosage: "40mg", brand: "Lasix", price: 20, rating: 4.3, purpose: "Diuretic for fluid retention", image: "https://st-b.medsgo.ph/images/detailed/24/Lasix_20_mg_2ml_Ampule.jpg" },
    { id: 18, name: "Prednisone", dosage: "10mg", brand: "Deltasone", price: 28, rating: 4.2, purpose: "Anti-inflammatory steroid", image: "https://tse1.mm.bing.net/th/id/OIP.gLEWjq0-RfYgpAUJMEWQtAHaFs?pid=Api&P=0&h=180" },
    { id: 19, name: "Gabapentin", dosage: "300mg", brand: "Neurontin", price: 70, rating: 4.4, purpose: "Treats nerve pain and seizures", image: "https://prescriptiongiant.com/wp-content/uploads/2022/05/neurontin-500x500-1.jpg" },
    { id: 20, name: "Sertraline", dosage: "50mg", brand: "Zoloft", price: 65, rating: 4.5, purpose: "Antidepressant for depression and anxiety", image: "https://tse4.mm.bing.net/th/id/OIP.rUbM5viLutc1-CjehGpmRwHaEH?pid=Api&P=0&h=180" }
  ]);

  const addMedicine = (medicine) => {
    const newId = Math.max(...medicines.map(med => med.id)) + 1;
    setMedicines([...medicines, { ...medicine, id: newId }]);
  };

  const updateMedicine = (id, updatedMedicine) => {
    setMedicines(medicines.map(med => med.id === id ? { ...updatedMedicine, id } : med));
  };

  const deleteMedicine = (id) => {
    setMedicines(medicines.filter(med => med.id !== id));
  };

  return (
    <MedicineContext.Provider value={{ medicines, addMedicine, updateMedicine, deleteMedicine }}>
      {children}
    </MedicineContext.Provider>
  );
};
