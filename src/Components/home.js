import { useEffect, useState } from "react"; // React hooks
import Header from "./Header"; // Header component (e.g., navigation, logout)
import Hero from "./Hero"; // Hero section, likely a main banner or summary
import News from "./News"; // News component, displays live cryptocurrency news
import UserAssetsTransactions from "./UserAssetsTransactions"; // User-specific financial data
import axios from "axios"; // HTTP client for API requests

axios.defaults.withCredentials = true; // Ensure cookies are sent with requests

// Home component: fetches user data and renders the main app layout
function Home({ onLogoutSuccess, userData }) {
  const [userInfo, setUserInfo] = useState("oi"); // Stores user information
  const user = userData; // User data from parent component
  //console.log("User data:", user.access_token); // Log user data
  // TODO: Refresh log out user, fix
  // Could finally loggin, now I got to fix how the 
  // data is being retrieved in the backend
  // It still logs out when I refresh the page
  // and I don't want that to happen
  // Fetch user data on component mount
  useEffect(() => {
    
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/", { 
          headers: {
            Authorization: `Bearer ${user.auth.access_token}`
          } 
        }); 
        if (response.data.user) {
          setUserInfo(response.data); 
        } else {
          alert("User not logged in");
        }
      } catch (error) {
        console.error("Error fetching user data:", error); 
      }
    };

    fetchUserData(); 
  }, [user]); 

  // Render loading state while waiting for user info
  // if (!userInfo) {
  //   return <div>Loading...</div>;
  // }

  // Render main components after user info is fetched
  return (
    <div>
      <Header onLogoutSuccess={onLogoutSuccess} userInfo={userInfo} />
      <Hero userInfo={userInfo} />
      <UserAssetsTransactions userInfo={userInfo} />
      <News />
    </div>
  );
}

export default Home;