import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Home() {
  const { language, changeLanguage, getTexts } = useLanguage();
  const texts = getTexts();
  return (
    <section className="home section" id="home">
      <div className="home__container container grid"></div>
    </section>
  );
}
