import Header from "./Header";
import Hero from "./Hero";
import News from "./News";
import UserAssetsTransactions from "./UserAssetsTransactions";

function Home({ onLogoutSuccess }) {
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
