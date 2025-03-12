import Header from "./Header"; // Header component (e.g., navigation, logout)
import Hero from "./Hero"; // Hero section, likely a main banner or summary
import News from "./News"; // News component, displays live cryptocurrency news
import UserAssetsTransactions from "./UserAssetsTransactions"; // User-specific financial data
import axios from "axios"; // HTTP client for API requests

axios.defaults.withCredentials = true; // Ensure cookies are sent with requests

// Home component: fetches user data and renders the main app layout
function Home() {
  //const [userInfo, setUserInfo] = useState(); // Stores user information
  const user = window.localStorage.getItem('access_token'); // User data from parent component
  console.log("Inside Home component, user token:", user)


  // Render main components after user info is fetched
  return (
    <div>
      <Header />
      <Hero  />
      <UserAssetsTransactions />
      <News />
    </div>
  );
}

export default Home;