import React from "react";
import initFluid from "./script";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";

const App = () => {
  useEffect(() => {
    initFluid();
  }, []);

  return (
    <div>
      <NavBar />
      <Banner />
    </div>
  );
};

export default App;
