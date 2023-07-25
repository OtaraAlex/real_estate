import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import AreaContainer from "../components/area-container";
import FeatureContainer from "../components/feature-container";
import RentPropertiesCard from "../components/rent-properties-card";
import RentPropertiesContainer from "../components/rent-properties-container";
import Contact from "../components/contact";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <div className="relative bg-gray-white w-full h-[5095.99px] flex flex-col items-center justify-start">
      <Header hamburger={false} />
      <Hero />
      <AreaContainer />
      <FeatureContainer />
      <RentPropertiesCard />
      <RentPropertiesContainer />
      <Contact />
      <Footer
        imageIds="/houseline2.svg"
        smallImageIds="/social-media-logo5.svg"
        mediumImageIds="/social-media-logo6.svg"
        smallImageIds2="/social-media-logo7.svg"
        smallImageIds3="/social-media-logo8.svg"
        largeImageIds="/social-media-logo9.svg"
        propOverflow="unset"
      />
    </div>
  );
};

export default LandingPage;
