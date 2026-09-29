import React from "react";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={className}>
      <div className="container">
        <div className="header-wrapper">
          <div className="header-left">
            <a href="" className="logo">
              <img src="" alt="" />
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
