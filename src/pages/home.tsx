import React from "react";
import { Navigation } from "../components";
import { StaticImage } from "gatsby-plugin-image";

const Home = () => {
  return (
    <div className="container">
      <Navigation />
      <main className="home-page">
        <StaticImage
          src="../images/chris-lee-yb3hsmz4utg-unsplash.jpg"
          alt="plants"
          className="hero-img"
        />
        <h1 className="main-text">Welcome</h1>
      </main>
    </div>
  );
};

export default Home;
