import { useEffect, useState } from "react"; // React hooks
import Header from "./Header"; // Header component (e.g., navigation, logout)
import Hero from "./Hero"; // Hero section, likely a main banner or summary
import News from "./News"; // News component, displays live cryptocurrency news
import UserAssetsTransactions from "./UserAssetsTransactions"; // User-specific financial data
import axios from "axios"; // HTTP client for API requests

axios.defaults.withCredentials = true; // Ensure cookies are sent with requests

// Home component: fetches user data and renders the main app layout
function Home({ onLogoutSuccess }) {
  const [userInfo, setUserInfo] = useState(null); // Stores user information

  // TODO: Refresh log out user, fix
  
  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/"); 
        if (response.data.user) {
          setUserInfo(response.data); 
        } else {
          alert("User not logged in");
          onLogoutSuccess(); 
        }
      } catch (error) {
        console.error("Error fetching user data:", error); 
      }
    };

    fetchUserData(); 
  }, []); 

  // Render loading state while waiting for user info
  if (!userInfo) {
    return <div>Loading...</div>;
  }

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