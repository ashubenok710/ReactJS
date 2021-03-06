import React from "react";
import "./Header.css";

const Header = ({ headerText }) => {
  return (
    <header className="header">
      <h1>{headerText}</h1>
    </header>
  );
};

export default Header;
