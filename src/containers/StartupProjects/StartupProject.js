import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";
import ProjectVideoCard from "./ProjectVideoCard";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade direction="up" triggerOnce>
      <div className="main" id="projects">
        <div className="projects-container-main">
          <h1 className="projects-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-cards-div">
            {bigProjects.projects.map((project, i) => {
              return (
                <ProjectVideoCard 
                  key={i}
                  project={project}
                  isDark={isDark}
                  openUrlInNewTab={openUrlInNewTab}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
