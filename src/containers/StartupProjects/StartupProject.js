import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";

// Create a separate component for project cards
const ProjectCard = ({ project, isDark }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = React.useRef(null);
  
  const handlePlayClick = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const openUrlInNewTab = (url) => {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  };
  
  return (
    <div
      className={
        isDark
          ? "dark-mode project-card project-card-dark"
          : "project-card project-card-light"
      }
    >
      {project.image ? (
        <div className="project-image">
          <img
            src={project.image}
            alt={project.projectName}
            className="card-image"
          ></img>
        </div>
      ) : null}
      {project.demoVideo && (
        <div className="project-demo-video">
          <video 
            ref={videoRef}
            loop 
            muted 
            playsInline
            poster={project.image}
            preload="auto"
            controls={isPlaying}
          >
            <source src={project.demoVideo.replace(/\.webm$/, ".mp4")} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {!isPlaying && (
            <div className="video-play-button" onClick={handlePlayClick}>
              <svg viewBox="0 0 64 64" width="64" height="64">
                <circle cx="32" cy="32" r="32" fill="rgba(0, 0, 0, 0.5)" />
                <path d="M26,20 L26,44 L44,32 L26,20 Z" fill="white" />
              </svg>
            </div>
          )}
        </div>
      )}
      <div className="project-detail">
        <h5
          className={isDark ? "dark-mode card-title" : "card-title"}
        >
          {project.projectName}
        </h5>
        <p
          className={
            isDark ? "dark-mode card-subtitle" : "card-subtitle"
          }
        >
          {project.projectDesc}
        </p>
        {project.footerLink ? (
          <div className="project-card-footer">
            {project.footerLink.map((link, i) => {
              return (
                <span
                  key={i}
                  className={
                    isDark ? "dark-mode project-tag" : "project-tag"
                  }
                  onClick={() => openUrlInNewTab(link.url)}
                >
                  {link.name}
                </span>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

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
            {bigProjects.projects.map((project, i) => (
              <ProjectCard 
                key={i}
                project={project}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
