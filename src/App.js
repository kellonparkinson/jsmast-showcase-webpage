import { Download, Features, SectionWrapper } from "./components";
import assets from './assets';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title='Your own marketplace for NFTs. Start Selling & Growing.'
        description='Buy, store, and collect NFTs. Exchange and earn crypto. Join 25+ million people using ProNef Marketplace.'
        showBtn
        mockupImg={assets.homeHero}
        banner='banner'
      />
    </>
  );
}

export default App;
