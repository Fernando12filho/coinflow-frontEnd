import Header from "./Header";
import Hero from "./Hero";
import News from "./News";
import UserAssetsTransactions from "./UserAssetsTransactions";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <UserAssetsTransactions />
      <News />
    </div>
  );
}

export default Home;
