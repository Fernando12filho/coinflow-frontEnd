import { useEffect, useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import News from "./News";
import UserAssetsTransactions from "./UserAssetsTransactions";
import axios from "axios";



// Connects to the API, retrieves user data, send it to app.js or change global state
function Home({ onLogoutSuccess, userData }) {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/");
        if (response.data.user) {
          setUserInfo(response.data); // Store user info from the response
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
      <Header onLogoutSuccess={ onLogoutSuccess} userData ={userData} />
      <Hero />
      <UserAssetsTransactions />
      <News />
    </div>
  );
}

export default Home;
