import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import useGetPhotos from "../hooks/useGetPhotos";
import "./PhotoGrid.scss";

const PhotoGrid: React.FC = () => {
  const photos = useGetPhotos();

  return (
    <div className="photo-grid">
      {photos.map(({ node }) => (
        <GatsbyImage
          image={node.childImageSharp.gatsbyImageData}
          alt={node.base}
        />
      ))}
    </div>
  );
};

export default PhotoGrid;
