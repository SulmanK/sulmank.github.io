import React, {useState} from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const handleImageLoad = () => {
    console.log("Image loaded successfully:", cardInfo.title);
    setImageLoaded(true);
  };

  const handleImageError = () => {
    console.log("Image failed to load:", cardInfo.title);
    setImageError(true);
  };

  return (
    <div className={`${isDark ? "dark-mode" : ""} certificate-card mobile-card`}>
      <div className="certificate-image-div">
        {!imageLoaded && !imageError && (
          <div className="image-placeholder">Loading...</div>
        )}
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className={`card-image ${imageLoaded ? 'loaded' : ''}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </div>
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
              className={`${isDark ? "dark-mode" : ""} certificate-tag`}
              onClick={() => openUrlInNewTab(v.url, v.name)}
            >
              {v.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
