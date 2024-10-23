import React from "react";
import "./style.css";
import transactions from "../../TestObjects/transactionObjects.js";


// Receive transactions made by the user: 
// TODO: Spacement is not yet complete, for sure bugs will happen

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
        <div className="transactions-input-bg">
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
      <div className="view-all">
        <p>View All</p>
      </div>
    </div>
  );
}

export default Transactions;
