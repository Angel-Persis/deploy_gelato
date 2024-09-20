import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <h2>Our Services</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>High-Quality Prints</h3>
          <p>We offer the best print quality for your designs and projects.</p>
        </div>
        <div className="feature-card">
          <h3>Worldwide Shipping</h3>
          <p>Get your products delivered to any part of the world.</p>
        </div>
        <div className="feature-card">
          <h3>Customizable Orders</h3>
          <p>Tailor your prints and merchandise to fit your exact needs.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
