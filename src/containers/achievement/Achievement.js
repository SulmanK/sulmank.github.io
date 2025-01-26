import React, {useContext, useState, useEffect} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  
  // Enhanced debugging logs
  console.log("Achievement Section:", {
    title: achievementSection.title,
    display: achievementSection.display,
    cardCount: achievementSection.achievementsCards?.length,
    firstCard: achievementSection.achievementsCards?.[0]
  });
  
  // Add window width debugging
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  console.log("Current window width:", windowWidth);
  
  if (!achievementSection.display) {
    console.log("Achievement section is not displayed");
    return null;
  }
  
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          {/* Debug info */}
          {process.env.NODE_ENV === 'development' && (
            <div style={{
              padding: '10px', 
              background: '#f0f0f0', 
              margin: '10px 0',
              position: 'sticky',
              top: 0,
              zIndex: 1000
            }}>
              <div>Window width: {windowWidth}px</div>
              <div>Number of cards: {achievementSection.achievementsCards?.length || 0}</div>
              <div>Display mode: {isDark ? 'Dark' : 'Light'}</div>
            </div>
          )}
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {achievementSection.achievementsCards.map((card, i) => {
              console.log(`Rendering card ${i}:`, card.title);
              return (
                <AchievementCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
