import React, { useState, useRef, useEffect } from "react";
import "./StartupProjects.scss";

const ProjectVideoCard = ({ project, isDark, openUrlInNewTab }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayFailed, setAutoplayFailed] = useState(false);
  const videoRef = useRef(null);
  
  // Try to autoplay when component mounts
  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.log("Autoplay prevented:", error);
            setAutoplayFailed(true);
          });
      }
    }
  }, []);
  
  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setAutoplayFailed(false);
          })
          .catch((error) => {
            console.error("Video play failed even after click:", error);
          });
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Function to handle video errors
  const handleVideoError = (e) => {
    console.error("Video failed to load", e);
    setAutoplayFailed(true);
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
          {autoplayFailed && (
            <div className="video-overlay" onClick={handleVideoClick}>
              <div className="play-button">▶</div>
            </div>
          )}
          <video 
            ref={videoRef}
            autoPlay
            loop 
            muted 
            playsInline
            onClick={handleVideoClick}
            poster={project.image}
            preload="metadata"
            onError={handleVideoError}
          >
            <source src={project.demoVideo} type="video/webm" />
            <source src={project.demoVideo.replace('.webm', '.mp4')} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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

export default ProjectVideoCard; 