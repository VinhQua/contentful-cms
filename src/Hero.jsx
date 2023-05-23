import React from "react";
import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Hexagon whatever marfa yuccie, cronut fanny pack plaid raw denim
            retro master cleanse chambray. Retro fanny pack drinking vinegar,
            try-hard shabby chic direct trade polaroid bruh asymmetrical.
            Cornhole lo-fi VHS fashion axe leggings. Shoreditch bushwick
            leggings keytar kitsch tousled tacos echo park sus. Chia la croix
            everyday carry, fashion axe PBR&B flexitarian Brooklyn coloring book
            squid chillwave vegan.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
