import { Download, Features, SectionWrapper } from "./components";
import assets from './assets';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title='Your own marketplace for NFTs. Start selling & growing.'
        description='Buy, store, and collect NFTs. Exchange and earn crypto. Join 25+ million people using ProNef Marketplace.'
        showBtn
        mockupImg={assets.homeHero}
        banner='banner'
      />
      <SectionWrapper 
        title='Experience NFTs the right way.'
        description='A buttery user experience. ProNef gives you the smooth, constant colors of a fluent UI design.'
        mockupImg={assets.homeCards}
        reverse
      />
    </>
  );
}

export default App;