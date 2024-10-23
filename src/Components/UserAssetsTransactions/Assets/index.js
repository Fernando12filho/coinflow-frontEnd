import React from "react";
import "./style.css";
import plus from "../../../images/plus.svg";
import assets from "../../TestObjects";

// Todo: "Add Assets will pop up a panal list with a list of assets
// that can be followed by the user"

// Receives a list of assets followed by the logged in user
// To-do: create loop to go through all assets and display them

function Assets() {

  function openAssetsTab(){
    alert("function not available yet")
  }

  return (
    <div className="asset-card-tab">
      {assets.map((assets, index) => (
        <div
          className="asset-card"
          key={index}
          style={{ backgroundColor: assets.backgroundColor }}
        >
          <img src={assets.image} alt="Crypto" />
          <p id="card-middle">{assets.name}</p>
          <p>${assets.price}</p>
        </div>
      ))}

      <div className="asset-card" id="add-asset-card">
        <button className="add-asset-button" onClick={openAssetsTab}>
          <img src={plus} alt="+" />
          Add Assets
        </button>
      </div>
    </div>
  );
}

export default Assets;
