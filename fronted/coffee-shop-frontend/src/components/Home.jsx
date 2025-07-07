// File: /src/components/Home.jsx
import React from "react";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>Artisan Coffee Crafted with Passion</h3>
        <p>
          Experience the perfect blend of tradition and innovation. Our expertly roasted beans 
          deliver exceptional flavor in every cup, sourced directly from the world's finest coffee regions.
        </p>
        <a href="#menu" className="btn">
          Explore Our Menu
        </a>
      </div>
    </section>
  );
};

export default Home;