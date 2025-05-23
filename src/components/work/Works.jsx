import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import BilginEstateImg from "../../assets/BilginEstate.png";
import FoodiImg from "../../assets/Foodi.png";
import YelpCampImg from "../../assets/YelpCamp.png";
import TimusImg from "../../assets/Timus.png";
import WorkCard from "./WorkCard";
import vellaImg from "../../assets/VellaConcept.png";
import soloImg from "../../assets/Solo.png";

export default function Works() {
  const { getTexts } = useLanguage();
  const texts = getTexts();

  const projects = [
    {
      id: 1,
      image: soloImg,
      title: "SOLO-ARGE",
      description: texts.work.soloDesc,
      demoLink: "https://soloarge.com/",
    },
    {
      id: 2,
      image: vellaImg,
      title: "VellaConcept",
      description: texts.work.vellaConceptDesc,
      demoLink: "https://vellaconcept.com/",
    },
    {
      id: 3,
      image: BilginEstateImg,
      title: "Bilgin-Estate",
      description: texts.work.estateDesc,
      github: "https://github.com/ErdemBilgn/BilginEstate-MERN",
      demoLink: "https://bilginestate-mern.onrender.com/",
      videoLink: "https://youtu.be/Kq0L7f8bTKQ",
    },

    {
      id: 4,
      image: FoodiImg,
      title: "Foodi",
      description: texts.work.foodiDesc,
      github: "https://github.com/ErdemBilgn/Foodie-MERN",
      demoLink: "https://foodi-client-seven.vercel.app/",
      videoLink: "https://youtu.be/tkVPpXab15U",
    },

    {
      id: 5,
      image: YelpCampImg,
      title: "YelpCamp",
      description: texts.work.yelpDesc,
      github: "https://github.com/ErdemBilgn/YelpCamp",
      demoLink: "https://yelpcamp-sc47.onrender.com",
      videoLink: "https://youtu.be/9bHKsMg3WO8",
    },

    {
      id: 6,
      image: TimusImg,
      title: texts.work.timusTitle,
      description: texts.work.timusDesc,
      github: "https://github.com/ErdemBilgn/Timus-Bootcamp-Final-Case",
    },
  ];
  return (
    <div className="work__container container grid">
      {projects.map((project) => (
        <WorkCard
          key={project.id}
          project={project}
          codeText={texts.work.code}
        />
      ))}
    </div>
  );
}
