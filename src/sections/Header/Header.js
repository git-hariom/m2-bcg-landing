import "./Header.scss";
import { useState } from "react";

const Header = ({ prop }) => {
  const [showHemberger, setShowHemberger] = useState(false);

  return (
    <div className="header-parent">
      <div className={`mobile-view-header ${!showHemberger ? '':'hide'}`}>
        <div
          className="hemberger"
          onClick={() =>
            setShowHemberger((prev) => {
              return !prev;
            })
          }
        ></div>
        <span className="brand-name">COMMERCE</span>
      </div>
      <div className={`header-wrapper ${showHemberger ? '':'hide'}`}>
        <div className="nav-option-wrapper">
          <div
            className="close"
            onClick={() =>
              setShowHemberger((prev) => {
                return !prev;
              })
            }
          ></div>
          <div className="nav-options">
            <span className="brand-name">COMMERCE</span>
            <span className="nav">Sell</span>
            <span className="nav">Marketplace</span>
            <span className="nav">Community</span>
            <span className="nav">Develop</span>
            <span className="nav">Resources</span>
          </div>
          <div className="btn-actions-wrapper">
            <span className="login">Log In</span>
            <span className="get-started">Get Started</span>
            <span className="search"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
