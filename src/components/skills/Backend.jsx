import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Backend() {
  const { getTexts } = useLanguage();
  const texts = getTexts();
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills__name">NodeJS</h3>
              <span className="skills__level">{texts.skills.advanced}</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills__name">ExpressJS</h3>
              <span className="skills__level">{texts.skills.advanced}</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills__name">.Net MVC</h3>
              <span className="skills__level">{texts.skills.intermediate}</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">{texts.skills.intermediate}</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills__name">NestJS</h3>
              <span className="skills__level">{texts.skills.intermediate}</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills__name">MySQL / PostgresSQL</h3>
              <span className="skills__level">{texts.skills.basic}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
