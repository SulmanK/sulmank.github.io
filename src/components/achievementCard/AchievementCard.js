import React, { useState, useRef, useEffect } from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
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
          .catch(() => {
            console.error("Video play failed even after click");
          });
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
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
            poster={cardInfo.image}
            preload="metadata"
          >
            <source src={cardInfo.demoVideo || cardInfo.video} type="video/webm" />
            <source src={(cardInfo.demoVideo || cardInfo.video).replace('.webm', '.mp4')} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
