import React, { useState } from "react";
import "../Hero/style.css";
import open_eye from "../../images/open-eye.svg";
import closed_eye from "../../images/closed-eye.svg";

// Hero displays user's total BTC and investment value
function Hero({ userInfo }) {
  // Visibility states for sensitive data
  const [isBtcVisible, setIsBtcVisible] = useState(false);
  const [isInvestedVisible, setIsInvestedVisible] = useState(false);

  // Toggle functions for visibility
  const toggleBtcVisibility = () => setIsBtcVisible(!isBtcVisible);
  const toggleInvestedVisibility = () => setIsInvestedVisible(!isInvestedVisible);

  return (
    <div className="hero">
      {/* Bitcoin amount section */}
      <div className="hero-children">
        <h2>BTC</h2>
        <div className="btc-amount-quantity">
          {/* Conditionally display BTC amount or masked value */}
          <p>{isBtcVisible ? userInfo.total_btc_amount : "********"}</p>
          {/* Toggle visibility with eye icon */}
          <img
            src={isBtcVisible ? open_eye : closed_eye}
            alt="eye"
            onClick={toggleBtcVisibility}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      {/* Total investment section */}
      <div className="hero-children">
        <h2>Total</h2>
        <div className="btc-amount-quantity">
          {/* Conditionally display total investment or masked value */}
          <p>{isInvestedVisible ? "$" + userInfo.total_investment_value : "********"}</p>
          <img
            src={isInvestedVisible ? open_eye : closed_eye}
            alt="eye"
            onClick={toggleInvestedVisibility}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      {/* Add Transaction button */}
      <div className="hero-children">
        <button>Add Transaction</button> {/* Placeholder for add transaction functionality */}
      </div>
      {/* 
      <div className="addTransactionpanel">
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
      </div>
      */}
    </div>
  );
}

export default Hero;
