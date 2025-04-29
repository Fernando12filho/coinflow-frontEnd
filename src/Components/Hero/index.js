import React, { useState, useEffect } from "react";
import "../Hero/style.css";
import open_eye from "../../images/open-eye.svg";
import closed_eye from "../../images/closed-eye.svg";
import InvestmentForm from "../InvestmentForm";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";

// Hero displays user's total BTC and investment value
function Hero({ userInfo }) {
  // Visibility states for sensitive data
  const [isBtcVisible, setIsBtcVisible] = useState(false);
  const [isInvestedVisible, setIsInvestedVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false); // Track popup visibility

  // Toggle functions for visibility
  const toggleBtcVisibility = () => setIsBtcVisible(!isBtcVisible);
  const toggleInvestedVisibility = () => setIsInvestedVisible(!isInvestedVisible);
  const toggleFormVisibility = () => setIsFormVisible(!isFormVisible); // Toggle form

  const [userData, setUserData] = useState({});
  const user  = useAuth();

    useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/", {
          headers: {
            Authorization: `Bearer ${user.auth.access_token}`,
          },
          withCredentials: true,
        });
        if (response.data.user) {
          console.log("Resposta do servidor quando pega: ", response.data);
          setUserData(response.data);
        } else {
          alert("User not logged in");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchUserData();
  }, [user.auth.access_token]);
  

  return (
    <div className="hero">
      {/* Bitcoin amount section */}
      <div className="hero-children">
        <h2>BTC</h2>
        <div className="btc-amount-quantity">
          {/* Conditionally display BTC amount or masked value */}
          <p>{isBtcVisible ? userData.total_btc_amount : "********"}</p>
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
          <p>{isInvestedVisible ? "$" + Number(userData.total_investment_value).toFixed(2) : "********"}</p>
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
        <button onClick={toggleFormVisibility}>Add Transaction</button> {/* Placeholder for add transaction functionality */}
      </div>

      
      {isFormVisible && (
        <InvestmentForm onClose={toggleFormVisibility} userInfo={userInfo} />
      )}
    </div>
  );
}

export default Hero;
