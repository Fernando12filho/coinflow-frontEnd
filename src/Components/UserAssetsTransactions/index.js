import React, { useState } from "react";
import Transactions from "./Transactions";
import Assets from "./Assets";
import "./style.css";

function UserAssetsTransactions() {
  // Manage active tab state
  const [activeTab, setActiveTab] = useState("tab1");

  // Function to return the class for an active tab
  const getTabClass = (tabName) => {
    return activeTab === tabName ? "user-assets-transactions-title active" : "user-assets-transactions-title";
  };

  return (
    <div className="user-assets-transactions">
      {/* Assets Tab */}
      <div className="tab">
        <button
          className={getTabClass("tab1")}
          onClick={() => setActiveTab("tab1")}
        >
          Assets
        </button>
        {activeTab === "tab1" && (
          <div className="user-assets-transactions-page">
            <Assets />
          </div>
        )}
      </div>

      {/* Transactions Tab */}
      <div className="tab">
        <button
          className={getTabClass("tab2")}
          onClick={() => setActiveTab("tab2")}
        >
          Transactions
        </button>
        {activeTab === "tab2" && (
          <div className="user-assets-transactions-page">
            <Transactions />
          </div>
        )}
      </div>
    </div>
  );
}

export default UserAssetsTransactions;