import React from "react";
import "./style.css";
import bitcoin from '../../../images/Bitcoin.svg'
import plus from '../../../images/plus.svg'

function Assets() {
  return (
    <div className="asset-card-tab">
      <div className="asset-card">
        <img src={bitcoin} alt="Crypto" />
        <p id="card-middle">Crypto Name</p>
        <p>$999</p>
      </div>
      <div className="asset-card" id="add-asset-card">
            <img src={plus} alt="+"/>
            <p>Add Assets</p>
      </div>
    </div>
  );
}

export default Assets;
