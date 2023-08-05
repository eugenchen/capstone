import React from 'react';
import heroImg from '../assets/hero-img.jpg';

const Main = () => {
  return (
    <main>
      {/* Hero Section */}
      <div id="hero-section">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes saved with a modern twist.</p>
        <button>Reserve a table!</button>
        <img src={heroImg} alt="bruscetta" width="300" height="400" />
      </div>
      <div>Highlights</div>
      <div>Testimonials</div>
      <article>About</article>
    </main>
  );
};

export default Main;
