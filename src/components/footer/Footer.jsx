import React from "react";
import "./footer.css";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Footer() {
  const { getTexts } = useLanguage();
  const texts = getTexts();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Erdem</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              {texts.nav.about}
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              {texts.nav.skills}
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              {texts.nav.portfolio}
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/erdembilgn/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/omererdembilgin"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>

          <a
            href="https://github.com/ErdemBilgn"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169;Erdem Bilgin. {texts.footer.copy}
        </span>
      </div>
    </footer>
  );
}
