import { Link } from "gatsby";
import React from "react";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation-list">
      <Link to="/">Home</Link>
      <Link to="/code">Code</Link>
      <Link to="/photography">Photography</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};
export default Navigation;
