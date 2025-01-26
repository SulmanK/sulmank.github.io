import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-awesome-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade direction="up" triggerOnce>
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {" "}
          <a href="https://github.com/saadpasta/developerFolio">
          </a>
        </p>
      </div>
    </Fade>
  );
}
