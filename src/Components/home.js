import { useEffect, useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import News from "./News";
import UserAssetsTransactions from "./UserAssetsTransactions";
import axios from "axios";

axios.defaults.withCredentials = true;
// Connects to the API, retrieves user data, send it to app.js or change global state
function Home({ onLogoutSuccess }) {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/");
        if (response.data.user) {
          setUserInfo(response.data); // Store user info from the response
          console.log("user info is: ", userInfo);
        } else {
          alert("User not logged in");
          onLogoutSuccess(); // Log out if no user info found
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []); // Only run once when component mounts

  if (!userInfo) {
    return <div>Loading...</div>; // Show loading while fetching data
  }

  return (
    <div>
      <Header onLogoutSuccess={onLogoutSuccess} userInfo={userInfo} />
      <Hero userInfo={userInfo}/>
      <UserAssetsTransactions userInfo={userInfo}/>
      <News />
    </div>
  );
}

export default Home;
