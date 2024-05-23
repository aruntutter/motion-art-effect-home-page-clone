import React from "react";
import initFluid from "./script";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Review from "./components/Review";

const App = () => {
  useEffect(() => {
    initFluid();
  }, []);

  return (
    <div>
      <NavBar />
      <Banner />
      <Review />
    </div>
  );
};

export default App;
