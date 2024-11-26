import React from "react";
import "./style.css";


// Receive transactions made by the user:
// TODO: Spacement is not yet complete, for sure bugs will happen

function Transactions({ userInfo }) {
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
      {userInfo.investments.map((userInfo, index) => (
        <div className="transactions-input-bg">
          <div className="transactions-input">
            <p>{userInfo.coin_name}</p>
            <p>{userInfo.id}</p>
            <p>
              {new Date(userInfo.purchase_date).toLocaleDateString("en-US")}
            </p>
            <p>{userInfo.amount}</p>
            <p>{userInfo.purchase_price}</p>
            <p
              style={{
                color:
                  userInfo.profit_loss > 0
                    ? "green"
                    : userInfo.profit_loss < 0
                    ? "red"
                    : "black",
              }}
            >
              {userInfo.profit_loss}
            </p>
            <button> Delete </button>
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
