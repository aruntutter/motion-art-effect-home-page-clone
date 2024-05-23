import React from "react";
import initFluid from "./script";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    initFluid();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-8xl font-bold text-pink-400">Motion Art Effect</h1>
    </div>
  );
};

export default App;
