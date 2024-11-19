import React, { useState } from "react";
import "../Hero/style.css";
import open_eye from "../../images/open-eye.svg";
import closed_eye from "../../images/closed-eye.svg";

// Receive user total invested, user amount of bitcoin, trigger to add transaction
function Hero({userInfo}) {
  // State for controlling the visibility of bitcoin amount and total invested
  const [isBtcVisible, setIsBtcVisible] = useState(false);
  const [isInvestedVisible, setIsInvestedVisible] = useState(false);

  // Dummy data for BTC amount and total invested
  const btcAmount = "0.1234 BTC";
  //const totalInvested = userInfo.totalInvested;

  // Toggle functions for each section
  const toggleBtcVisibility = () => setIsBtcVisible(!isBtcVisible);
  const toggleInvestedVisibility = () => setIsInvestedVisible(!isInvestedVisible);

  return (
    <div className="hero">
      {/* Bitcoin amount section */}
      <div className="hero-children">
        <h2>BTC</h2>
        <div className="btc-amount-quantity">
          <p>{isBtcVisible ? btcAmount : "********"}</p>
          <img
            src={isBtcVisible ? open_eye : closed_eye}
            alt="eye"
            onClick={toggleBtcVisibility}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      {/* Total Invested section */}
      <div className="hero-children">
        <h2>Total Invested</h2>
        <div className="btc-amount-quantity">
          <p>{isInvestedVisible ? "$" + userInfo.total_invested : "********"}</p>
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
        <button>Add Transaction</button>
      </div>
    </div>
  );
}

export default Hero;
