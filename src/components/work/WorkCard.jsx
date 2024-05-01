import React from "react";

export default function WorkCard({ project, codeText }) {
  return (
    <div className="work__card" key={project.id}>
      <img src={project.image} className="work__img" />
      <div className="work__card-body">
        <h3 className="work__title">{project.title}</h3>
        <p className="work__description">{project.description}</p>
        <div className="work__buttons">
          {project.videoLink && (
            <a
              href={project.videoLink}
              target="_blank"
              className="work__button"
            >
              Video
              <i className="uil uil-youtube work__button-icon"></i>
            </a>
          )}

          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              className="work__button "
            >
              Demo Link
              <i className="uil uil-globe work__button-icon"></i>
            </a>
          )}

          {project.github && (
            <a href={project.github} target="_blank" className="work__button">
              {codeText}
              <i className="uil uil-github-alt work__button-icon"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
