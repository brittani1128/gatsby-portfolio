import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Home from "./Home";
import "../styles.scss";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="main">
      <Home />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
