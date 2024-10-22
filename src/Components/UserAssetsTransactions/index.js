import React, { useState } from "react";
import Transactions from "./Transactions";
import Assets from "./Assets";
import "./style.css";

function UserAssetsTransactions() {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("assets");

  return (
    <div className="user-assets-transactions">
      <div className="button-tabs">
        <button
          className={activeTab === "assets" ? "active" : "deactivated"}
          onClick={() => setActiveTab("assets")}
          id="button-left"
        >
          Assets
        </button>
        <button
          className={activeTab === "transactions" ? "active" : "deactivated"}
          onClick={() => setActiveTab("transactions")}
          id="button-right"
        >
          Transactions
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "assets" && <Assets />}
        {activeTab === "transactions" && <Transactions />}
      </div>
    </div>
  );
}

export default UserAssetsTransactions;
