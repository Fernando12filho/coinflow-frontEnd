import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

// axios.defaults.withCredentials = true;
// Receive transactions made by the user:
// TODO: Spacement is not yet complete, for sure bugs will happen

function Transactions({ userInfo }) {

  const [transactions, setTransactions] = useState([userInfo.investments]);

  async function deleteTransaction(id) {
    // Make an API request to delete the transaction with the given ID
    try{
      const response = await axios.delete(`http://127.0.0.1:5000/delete`, id, { withCredentials: true });
      if(response.data.success){
        alert("Transaction deleted successfully");
      } else {
        alert(response.data.message || "Failed to delete transaction.");
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
      setTransactions(userInfo.investments);
  }, [userInfo]);

  console.log(userInfo);
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
      {transactions.map((transaction, index) => (
        <div className="transactions-input-bg">
          <div className="transactions-input">
            <p>{transaction.coin_name}</p>
            <p>{transaction.id}</p>
            <p>
              {new Date(transaction.purchase_date).toLocaleDateString("en-US")}
            </p>
            <p>{transaction.amount}</p>
            <p>{transaction.purchase_price}</p>
            <p
              style={{
                color:
                  transaction.profit_loss > 0
                    ? "green"
                    : transaction.profit_loss < 0
                    ? "red"
                    : "black",
              }}
            >
              {transaction.profit_loss}
            </p>
            <button onClick={() => deleteTransaction(transaction.id)}> Delete </button>
          </div>
        </div>
      ))}
      <div className="view-all">
        <a href=".">View All</a>
      </div>
    </div>
  );
}

export default Transactions;
