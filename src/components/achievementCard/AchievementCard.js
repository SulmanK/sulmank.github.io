import React, { useEffect, useRef } from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
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
            preload="none"
          >
            <source src={cardInfo.demoVideo || cardInfo.video} type="video/webm" />
            {/* Extract filename without extension and append mp4 extension */}
            <source 
              src={(cardInfo.demoVideo || cardInfo.video).toString().replace('.webm', '.mp4')} 
              type="video/mp4" 
            />
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
