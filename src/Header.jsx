import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header";

// Here is header including navbar

const Header = () => {
  const [options, setOptions] = useState(false);

  const onToggleOptions = () => setOptions(!options);
  const closeSidebar = () => setOptions(false);

  return (
    <nav className="header-container">
      <NavLink exact to="/" onClick={closeSidebar}>
        <img src="./fakelogo.png" alt="fakelogo" className="nav-logo" />
      </NavLink>
      <NavLink to="/About" className="nav-desktop-item">
        About
      </NavLink>
      <div className="icon-container" onClick={onToggleOptions}>
        <img
          src="./hamburger.png"
          alt="hamburger"
          className={options ? "icon-hidden" : "nav-options"}
        />
        <img
          src="./arrows.png"
          alt="arrows"
          className={options ? "nav-options" : "icon-hidden"}
        />
      </div>
      {options && (
        <div className="nav-container-sidebar">
          <p className="nav-sidebar-text">Hello!</p>
          <NavLink
            to="/About"
            className="nav-sidebar-item"
            onClick={closeSidebar}
          >
            About
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Header;
