import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  console.log("Card Info:", cardInfo); // Debug log
  
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
            autoPlay 
            loop 
            muted 
            playsInline
            poster={cardInfo.image}
          >
            <source src={cardInfo.demoVideo || cardInfo.video} type="video/mp4" />
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
