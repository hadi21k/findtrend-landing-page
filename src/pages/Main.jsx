import Companies from "../components/Main/Companies";
import DescriptionText from "../components/Main/DescriptionText";
import Footer from "../components/Main/Footer";
import Hero from "../components/Main/Hero";
import NewTab from "../components/Main/NewTab";
import Platform from "../components/Main/Platform";
import Prices from "../components/Main/Prices";

const Main = () => {
  return (
    <div id="about" className="bg-black pt-[65px]">
      <Hero />
      <NewTab />
      <DescriptionText />
      <Companies />
      <Platform />
      <Prices />
      <Footer />
    </div>
  );
};

export default Main;
