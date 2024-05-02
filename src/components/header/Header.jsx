import React, { useState } from "react";
import "./header.css";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const { language, changeLanguage, getTexts } = useLanguage();
  const texts = getTexts();

  // --------- CHANGE ACTIVE LINK ----------
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

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
                <a
                  href="#home"
                  onClick={() => setActiveNav("#home")}
                  className={
                    activeNav === "#home"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-estate nav__icon"></i> {texts.nav.home}
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#about"
                  onClick={() => setActiveNav("#about")}
                  className={
                    activeNav === "#about"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-user nav__icon"></i> {texts.nav.about}
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#skills"
                  onClick={() => setActiveNav("#skills")}
                  className={
                    activeNav === "#skills"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-file-alt nav__icon"></i>{" "}
                  {texts.nav.skills}
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#portfolio"
                  onClick={() => setActiveNav("#portfolio")}
                  className={
                    activeNav === "#portfolio"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-scenery nav__icon"></i>{" "}
                  {texts.nav.portfolio}
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#contact"
                  onClick={() => setActiveNav("#contact")}
                  className={
                    activeNav === "#contact"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
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
                  {language === "en" ? "Language : English" : "Dil : Türkçe"}
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
