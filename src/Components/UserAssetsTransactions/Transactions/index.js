import React, { useEffect } from "react";
import "./style.css";
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";

// axios.defaults.withCredentials = true;
// Receive transactions made by the user:
// TODO: Spacement is not yet complete, for sure bugs will happen

function Transactions() {
  //const [transactions, setTransactions] = useState([]);
  const {auth, investments, setInvestments }  = useAuth();

  // TODO: Add view more, expand the list of transactions
  // TODO: Click a transaction to open a modal with more details
  // TODO: Edit a transaction
  // TODO: Make update happen when transaction is added

  async function deleteTransaction(id) {
    // Make an API request to delete the transaction with the given ID
    try {
      const response = await axios.delete(`/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${auth.access_token}`,
        },
        withCredentials: true,
      });
      if (response.data.success) {
        setInvestments(response.data.investments); // Update the state with the new transactions list
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
         const response = await axios.get("/", {
           headers: {
             Authorization: `Bearer ${auth.access_token}`,
           },
           withCredentials: true,
         });
         if (response.data.user) {
           console.log("Resposta do servidor quando pega: ", response.data.investments);
           setInvestments(response.data.investments);
         } else {
           alert("User not logged in");
         }
       } catch (error) {
         console.error("Error fetching user data:", error);
       }
     };

      fetchUserData();
  }, [auth.access_token, setInvestments]); 

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
      {investments.map((transaction) => (
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
