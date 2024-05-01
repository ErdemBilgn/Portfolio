import React from "react";
import "./work.css";
import { useLanguage } from "../../contexts/LanguageContext";
import Works from "./Works";

export default function Work() {
  const { getTexts } = useLanguage();
  const texts = getTexts();

  return (
    <section className="section work" id="portfolio">
      <h2 className="section__title">{texts.work.title}</h2>
      <span className="section__subtitle">{texts.work.subtitle}</span>

      <Works />
    </section>
  );
}
