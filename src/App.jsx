import React from "react";
import initFluid from "./script";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Review from "./components/Review";
import MagicWand from "./components/MagicWand";
import ApplyCard from "./components/ApplyCard";
import SupportedBrowsers from "./components/SupportedBrowsers";

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
    </div>
  );
};

export default App;
