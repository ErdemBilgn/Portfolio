import React from "react";
import "./home.css";
import Social from "./Social";
import { useLanguage } from "../../contexts/LanguageContext";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

export default function Home() {
  const { language, changeLanguage, getTexts } = useLanguage();
  const texts = getTexts();
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
}
