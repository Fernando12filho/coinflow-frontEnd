import React, { useState } from "react";
import "./style.css"; // Add custom CSS for styling the popup

function InvestmentsForm({ onClose, userInfo }) {
  const [formData, setFormData] = useState({
    coin_name: "Bitcoin",
    investment_amount: "",
    crypto_amount: "",
    investment_date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Transaction added successfully!");
        onClose();
      } else {
        alert("Error adding transaction.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        <form onSubmit={handleSubmit}>
          <h2>Add Investment</h2>
          <label>
            Coin Name
            <input
              type="text"
              name="coin_name"
              value={formData.coin_name}
              disabled
            />
          </label>
          <label>
            Investment Amount ($)
            <input
              type="number"
              name="investment_amount"
              value={formData.investment_amount}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Crypto Amount (BTC)
            <input
              type="number"
              name="crypto_amount"
              value={formData.crypto_amount}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Investment Date
            <input
              type="date"
              name="investment_date"
              value={formData.investment_date}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default InvestmentsForm;