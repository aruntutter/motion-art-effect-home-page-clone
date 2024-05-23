import React from "react";
import initFluid from "./script";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Review from "./components/Review";
import MagicWand from "./components/MagicWand";
import ApplyCard from "./components/ApplyCard";
import SupportedBrowsers from "./components/SupportedBrowsers";
import Plugins from "./components/Plugins";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    initFluid();
  }, []);

  return (
    <div>
      <NavBar />
      <Banner />
      <Review />
      <MagicWand />
      <ApplyCard />
      <SupportedBrowsers />
      <Plugins />
      <Footer />
    </div>
  );
};

export default App;
