import React from "react";
import { WithRouter, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src="../logo.png" alt="Hooks News Logo" className="logo" />
      <NavLink to="/" className="header-title">
        Hooks news
      </NavLink>
    </div>
  );
};

export default Header;
