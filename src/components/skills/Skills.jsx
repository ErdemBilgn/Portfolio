import React from "react";
import "./skills.css";
import { useLanguage } from "../../contexts/LanguageContext";
import Frontend from "./Frontend";
import Backend from "./Backend";

export default function Skills() {
  const { getTexts } = useLanguage();
  const texts = getTexts();
  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">{texts.skills.title}</h2>
      <span className="section__subtitle">{texts.skills.subtitle}</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}
