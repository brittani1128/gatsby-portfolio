import React from "react";
import { Navigation } from "../components";

const Home = () => {
  return (
    <div className="container">
      <Navigation />
      <main className="home-page">
        <h2>My home page</h2>
      </main>
    </div>
  );
};

export default Home;
