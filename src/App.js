import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import UserAssetsTransactions from './Components/UserAssetsTransactions';
import News from './Components/News';
//Receive user info
//Logged in or not
//Name, Investment Data


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <UserAssetsTransactions />
      <News />
    </div>
  );
}

export default App;
