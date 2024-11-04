import { useEffect, useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import News from "./News";
import UserAssetsTransactions from "./UserAssetsTransactions";
import axios from "axios";
import { system } from "@chakra-ui/react/preset";


// Connects to the API, retrieves user data, send it to app.js or change global state
function Home({ onLogoutSuccess }) {
  const [userData, setUserData] = useState([]);
  const [userTransactions, setUserTransactions] = useState([])
  // Makes the connection to the api, retriving information from user and pass it down
  // to other components
  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/`).then((res) => {
      setUserData(res)
      console.log(userData)
    }).catch((error) => {
      console.log({"error": error, "reason": "loging failed"})
    }).then(
      //onLogoutSuccess(true)
    )
  },[userData])
  return (
    <div>
      <Header onLogoutSuccess={ onLogoutSuccess} />
      <Hero />
      <UserAssetsTransactions />
      <News />
    </div>
  );
}

export default Home;
