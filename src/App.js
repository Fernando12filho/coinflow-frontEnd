import { useState } from "react";
import "./App.css";
//import Header from "./Components/Header";
//import Hero from "./Components/Hero";
//import UserAssetsTransactions from "./Components/UserAssetsTransactions";
//import News from "./Components/News";
import LogIn from "./Components/LogIn";



//Receive user info
//Logged in or not
//Name, Investment Data

function App() {
  const [users, setUsers] = useState([])


  return (

      <div className="App">
        <LogIn />
        {/*
          <Header />
          <Hero />
          <UserAssetsTransactions />
          <News /> 
        */}
      </div>

  );
}

export default App;
