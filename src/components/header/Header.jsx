import React, { useState } from "react";
import "./header.css";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const { language, changeLanguage, getTexts } = useLanguage();
  const texts = getTexts();

  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <a href="/" className="nav__logo">
            Erdem
          </a>

          <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  <i className="uil uil-estate nav__icon"></i> {texts.nav.home}
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="uil uil-user nav__icon"></i> {texts.nav.about}
                </a>
              </li>

              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="uil uil-file-alt nav__icon"></i>{" "}
                  {texts.nav.skills}
                </a>
              </li>

              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <i className="uil uil-scenery nav__icon"></i>{" "}
                  {texts.nav.portfolio}
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="uil uil-message nav__icon"></i>{" "}
                  {texts.nav.contact}
                </a>
              </li>

              <li className="nav__item">
                <a
                  onClick={changeLanguage}
                  className="nav__link lang"
                  style={{ cursor: "pointer" }}
                >
                  <i className="uil uil-letter-japanese-a nav__icon"></i>
                  {language === "en" ? "English" : "Türkçe"}
                </a>
              </li>

              <i
                className="uil uil-times nav__close"
                onClick={() => setToggle(!toggle)}
              ></i>
            </ul>
          </div>

          <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </div>
  );
}
