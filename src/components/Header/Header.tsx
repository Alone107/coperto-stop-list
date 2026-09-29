import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="header-left">
            <a href="/" className="logo">
              COPERTO
            </a>
            <span>Ресторан</span>
          </div>
          <div className="header-right">
            <div className="header-data"></div>
          </div>
        </div>
      </div>
    </header>
  );
};
