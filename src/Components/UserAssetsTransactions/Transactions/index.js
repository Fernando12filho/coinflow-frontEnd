import React from "react";
import "./style.css";
import transactions from "../../TestObjects/transactionObjects.js";
import assets from "../../TestObjects/assetObjets.js";

function Transactions() {
  return (
    <div className="transactions-panel">
      <div className="transactions-titles">
        <p>Coin Name</p>
        <p>Transcation Id</p>
        <p>Purchase Date</p>
        <p>BTC Amount</p>
        <p>Purchase Price</p>
        <p>Profit / Loss</p>
        <button> Delete </button>
      </div>
      {transactions.map((transactions, index) => (
        <div>
          <div className="transactions-input">
            <p>{transactions.coin_name}</p>
            <p>{transactions.transaction_id}</p>
            <p>{transactions.purchase_amount}</p>
            <p>{transactions.coin_amount}</p>
            <p>{transactions.purchase_price}</p>
            <p>{transactions.profit_loss}</p>
            <button> Delete </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Transactions;
