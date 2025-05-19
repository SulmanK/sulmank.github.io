import React, {useContext, useRef, useEffect} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";

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
  
  const VideoComponent = ({project}) => {
    const videoRef = useRef(null);
    
    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };
      
      const handleVideoLoad = () => {
        if (videoRef.current) {
          videoRef.current.classList.add('loaded');
        }
      };
  
      const handleIntersection = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const video = entry.target;
            
            // Start loading the video
            if (video.paused) {
              video.play()
                .then(() => {
                  handleVideoLoad();
                })
                .catch(error => {
                  console.error("Error playing video:", error);
                });
            }
            
            observer.unobserve(video);
          }
        });
      };
      
      const observer = new IntersectionObserver(handleIntersection, options);
      
      if (videoRef.current) {
        videoRef.current.addEventListener('loadeddata', handleVideoLoad);
        observer.observe(videoRef.current);
      }
      
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadeddata', handleVideoLoad);
          observer.unobserve(videoRef.current);
        }
      };
    }, []);
    
    return (
      <div className="project-demo-video">
        <video 
          ref={videoRef}
          loop 
          muted 
          playsInline
          poster={project.image}
          preload="none"
        >
          <source src={project.demoVideo} type="video/webm" />
          {/* Extract filename without extension and append mp4 extension */}
          <source 
            src={project.demoVideo.toString().replace('.webm', '.mp4')} 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
  
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
                <div
                  key={i}
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
                  {project.demoVideo && <VideoComponent project={project} />}
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
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
