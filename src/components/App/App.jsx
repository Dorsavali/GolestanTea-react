import Menu from "../Menu/Menu";
import Hero from "../Hero/Hero";
import Devider from "../Devider/Devider";
import History from "../History/History";
import Features from "../Features/Features";
import Product from "../Product/Product";
import Background from "../Background/Background";
import Blog from "../Blog/Blog";
import Videos from "../Videos/Videos";
import Social from "../Social/Social";
import Responsibility from "../Responsiblity/Responsibility";
import SocialMediaBar from "../SocialMedia/SocialMedia";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <div>
      <Menu />
      <Hero />
      <Devider />
      <History />
      <Features />
      <Devider />
      <Product />
      <Background />
      <Blog />
      <Videos />
      <Social />
      <Devider />
      <Responsibility/>
      <SocialMediaBar/>
      <Footer/>
    </div>
  );
};

export default App;
