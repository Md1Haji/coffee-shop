import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        <span>Our</span> Story
      </h1>
      <div className="row">
        <div className="image">
          <img src="/images/about.jpg" alt="Our Coffee Story" />
        </div>
        <div className="content">
          <h3>Brewing Excellence Since 2015</h3>
          <p>
            Founded with a passion for exceptional coffee, we've been serving the community 
            with carefully sourced, ethically traded beans from small farms around the world. 
            Our master roasters bring decades of experience to every batch.
          </p>
          <p>
            From our cozy café atmosphere to our commitment to sustainability, every aspect 
            of our business reflects our dedication to quality and community. Join us for 
            an unforgettable coffee experience.
          </p>
          <a href="#menu" className="btn">Discover Our Menu</a>
        </div>
      </div>
    </section>
  );
};

export default About;
