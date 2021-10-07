import React from "react";
import { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [show, setShow] = useState(true);

  const handleDocumentScroll = () => {
    const { scrollTop } = document.documentElement || document.body;
    if (scrollTop >= 50) setShow(false);
    else setShow(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleDocumentScroll);
    return () => {
      window.removeEventListener("scroll", handleDocumentScroll);
    };
  });

  return (
    <header className={`header ${!show ? "header--hidden" : ""}`}>
      <div className="header__container">
        <a href="#home" className="nav__brand">
          <h2>Maxwel Santana</h2>
        </a>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="#home">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#about">
                About
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#home">
                Works
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#home">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
