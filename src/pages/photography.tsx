import React from "react";
import { Navigation } from "../components";
import PhotoGrid from "../components/PhotoGrid/PhotoGrid";

const PhotographyPage = () => {
  return (
    <div className="container">
      <Navigation />
      <main className="photo-page">
        <PhotoGrid />
      </main>
    </div>
  );
};

export default PhotographyPage;
