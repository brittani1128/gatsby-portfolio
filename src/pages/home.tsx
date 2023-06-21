import React from "react";
import { Navigation } from "../components";
import { StaticImage } from "gatsby-plugin-image";

const Home = () => {
  return (
    <div className="container">
      <Navigation />
      <main className="home-page">
        <section>
          <StaticImage
            src="../images/chris-lee-yb3hsmz4utg-unsplash.jpg"
            alt="plants"
            className="hero-img"
          />
          <h1 className="main-text">Welcome</h1>
        </section>
        <section className="">
          <h2>Recent Photos</h2>
        </section>
      </main>
    </div>
  );
};

export default Home;
