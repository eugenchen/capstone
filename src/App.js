import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import Reservations from "./components/Reservations";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="*" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
