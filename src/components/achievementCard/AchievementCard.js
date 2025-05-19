import React, { useState, useRef } from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  
  const handlePlayClick = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  
  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card"}
          className="card-image"
        />
      </div>
      
      {/* Check both demoVideo and video properties */}
      {(cardInfo.demoVideo || cardInfo.video) && (
        <div className="demo-video-container">
          <video 
            ref={videoRef}
            loop 
            muted 
            playsInline
            poster={cardInfo.image}
            preload="auto"
            controls={isPlaying}
          >
            <source src={(cardInfo.demoVideo || cardInfo.video).replace(/\.webm$/, ".mp4")} type="video/mp4" />
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

      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <span
              key={i}
              className="certificate-tag"
              onClick={() => {
                window.open(v.url, "_blank");
              }}
            >
              {v.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
