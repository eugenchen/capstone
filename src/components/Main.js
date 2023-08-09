import React from "react";
import heroImg from "../assets/hero-img.jpg";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <div id="hero-section">
        <div id="content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes saved with a modern twist.
          </p>
          <button>Reserve a table!</button>
          <img src={heroImg} alt="bruscetta" width="300" height="300" />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </main>
  );
};

export default Main;
