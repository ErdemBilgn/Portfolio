import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Frontend() {
  const { getTexts } = useLanguage();
  const texts = getTexts();
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">{texts.skills.advanced}</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">{texts.skills.advanced}</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">{texts.skills.advanced}</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">ReactJS</h3>
              <span className="skills__level">{texts.skills.intermediate}</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">VueJS</h3>
              <span className="skills__level">{texts.skills.basic}</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">{texts.skills.basic}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
