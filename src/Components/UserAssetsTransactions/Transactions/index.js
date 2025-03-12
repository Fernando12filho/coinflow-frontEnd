import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

// axios.defaults.withCredentials = true;
// Receive transactions made by the user:
// TODO: Spacement is not yet complete, for sure bugs will happen

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const user = window.localStorage.getItem("access_token");

  async function deleteTransaction(id) {
    // Make an API request to delete the transaction with the given ID
    try {
      const response = await axios.delete(`http://127.0.0.1:5000/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${user}`,
        },
        withCredentials: true,
      });
      if (response.data.success) {
        setTransactions((prev) => prev.filter((t) => t.id !== id));
        alert("Transaction deleted successfully");
      } else {
        alert(response.data.message || "Failed to delete transaction.");
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/", {
          headers: {
            Authorization: `Bearer ${user}`,
          },
          withCredentials: true,
        });
        if (response.data.user) {
          console.log("Resposta do servidor quando pega: ", response.data.investments);
          setTransactions(response.data.investments);
        } else {
          alert("User not logged in");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchUserData();
  }, []); //

  console.log(transactions);
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
            <button onClick={() => deleteTransaction(transaction.id)}>
              {" "}
              Delete{" "}
            </button>
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
