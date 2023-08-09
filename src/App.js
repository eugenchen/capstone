import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Footer />
    </div>
  );
};

export default App;
