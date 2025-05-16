import React, { useState } from "react";
import "./qualification.css";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Qualification() {
  const [toggleState, setToggleState] = useState(2);
  const { getTexts } = useLanguage();
  const texts = getTexts();

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="section qualification">
      <h2 className="section__title">{texts.qualification.title}</h2>
      <span className="section__subtitle">{texts.qualification.subtitle}</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            onClick={() => toggleTab(1)}
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            {texts.qualification.education}
          </div>

          <div
            onClick={() => toggleTab(2)}
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            {texts.qualification.experience}
          </div>
        </div>

        <div className="qualification__sections">
          {/* Education */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {texts.qualification.patika}
                </h3>
                <span className="qualification__subtitle">
                  {texts.qualification.bootcamp}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  10/2023 - 12/2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  {texts.qualification.collage}
                </h3>
                <span className="qualification__subtitle">
                  {texts.qualification.major}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2014 - 2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {texts.qualification.highschool}
                </h3>
                <span className="qualification__subtitle">
                  {texts.qualification.highschoolName}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2010 - 2014
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          {/* Experience */}

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  {texts.qualification.basarSoft}
                </h3>
                <span className="qualification__subtitle">
                  {texts.qualification.fullStack}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  02/2025 - {texts.qualification.ongoing}
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {texts.qualification.federal}
                </h3>
                <span className="qualification__subtitle">
                  {texts.qualification.engineer}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  08/2022 - 12/2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  {texts.qualification.sedas}
                </h3>
                <span className="qualification__subtitle">
                  {texts.qualification.intern}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  08/2016 - 09/2016
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
