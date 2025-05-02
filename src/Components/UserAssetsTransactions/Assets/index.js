import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import plus from "../../../images/plus.svg";

function Assets() {
  const [cryptoAssets, setCryptoAssets] = useState(() => {
    const storedAssets = localStorage.getItem("cryptoAssets");
    return storedAssets ? JSON.parse(storedAssets) : [];
  });
  const [loading, setLoading] = useState(true); // Loading state

  // Function to fetch live data from an API
  const fetchLivePrices = async () => {
    if(!localStorage.getItem("cryptoAssets")) {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/crypto-prices");
        setCryptoAssets(response.data);
        setLoading(false);
        console.log("Fetched cryptocurrency data:", response.data);
      } catch (error) {
        console.error("Error fetching cryptocurrency data:", error);
        setLoading(false);
      }
      console.log("No data in localStorage. Fetching cryptocurrency data...");
    } else {
      setCryptoAssets(JSON.parse(localStorage.getItem("cryptoAssets")));
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLivePrices();
  }, []);

  // Fetch data on component mount
  useEffect(() => {
    localStorage.setItem("cryptoAssets", JSON.stringify(cryptoAssets));
  }, [cryptoAssets]);

  // Fallback for loading state
  if (loading) {
    return <div className="asset-card-tab">Loading prices...</div>;
  }


  const coinColors = {
    bitcoin: "#F7931A", // Orange
    ethereum: "#3C3C3D", // Dark Gray
    solana: "#00FFA3", // Greenish
  };
  
  function getBackgroundColor(coinName) {
    // Check if the coin has a known color
    if (coinColors[coinName.toLowerCase()]) {
      return coinColors[coinName.toLowerCase()];
    }
    // Generate a random color for unknown coins
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  function getTextColor(backgroundColor) {
    // Extract RGB components
    const color = backgroundColor.slice(1); // Remove the '#'
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);
  
    // Calculate relative luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
    // Return white for dark backgrounds, black for light backgrounds
    return luminance > 0.5 ? "black" : "white";
  }

  return (
    <div className="asset-card-tab">
      {
        cryptoAssets.length === 0 ? (
          <div className="asset-card" id="no-assets-card" style={{ backgroundColor: "#f0f0f0", color: "#000" }}>
            <p>No assets added yet</p>
          </div>
        ) : (
          cryptoAssets.map((asset, index) => (
            <div
              className="asset-card"
              key={index}
              style={{ backgroundColor: getBackgroundColor(asset.name), color: getTextColor(getBackgroundColor(asset.name)) }} // Dynamic color assignment
            >
              <img src={asset.image} alt="Crypto" />
              <p id="card-middle">{asset.name}</p>
              <p>${asset.current_price}</p>
            </div>
          ))
        )
      }

      <div className="asset-card" id="add-asset-card">
        <button className="add-asset-button">
          <img src={plus} alt="+" />
          Add Assets
        </button>
      </div>
    </div>
  );
}

export default Assets;