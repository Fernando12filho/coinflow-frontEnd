import React from "react";
import "../Hero/style.css";
import open_eye from "../../images/open-eye.svg"
import closed_eye from "../../images/closed-eye.svg"

//receive user total invested, user amount of bitcoin, trigger do add transaction
function Hero() {
  return (
    <div className="hero">
      <div className="hero-children">
        <h2>BTC</h2>
        <div className="btc-amount-quantity">
          <p>********</p>
          <img src={closed_eye} alt="eye" />
        </div>
      </div>
      <div className="hero-children">
        <h2>Total Invested</h2>
        <div className="btc-amount-quantity">
          <p>$4,897.00</p>
          <img src={open_eye} alt="eye" />
        </div>
      </div>
      <div className="hero-children">
        <button>Add Transaction</button>
      </div>
    </div>
  );
}

export default Hero;
