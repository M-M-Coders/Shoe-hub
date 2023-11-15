import React from 'react';
import '../styles/About.css'; // Import your CSS file for About component

function About() {
  return (
    <div className="about-container">
      <h1 className="about-header">Ecee Shoes</h1>
      <div className="about-content">
        <p>
          Ecee Shoes is a premium online shoe store that offers a wide variety of stylish and high-quality footwear.
          Whether you're looking for casual shoes, running shoes, or dress shoes, we have it all.
          Our mission is to provide you with the best possible shoe-buying experience by offering exceptional customer service,
          a wide range of sizes, and competitive pricing.
        </p>
        <p>
          We have a dedicated team of professionals who work tirelessly to source the finest footwear from top manufacturers around the world.
          Our in-house team of designers and engineers are committed to delivering the latest fashion trends and the highest quality standards.
        </p>
        <p>
          Our shoe store also prides itself on being an environmentally conscious company.
          We believe in minimizing our impact on the environment by using eco-friendly materials in our products and reducing our overall carbon footprint.
        </p>
        <p>
          At Ecee Shoes, we are passionate about providing our customers with the best possible shopping experience.
          We offer fast and efficient shipping, easy returns, and top-notch customer support.
          So, what are you waiting for? Explore our wide range of shoes and discover the perfect pair for you today!
        </p>
      </div>
    </div>
  );
}

export default About;
