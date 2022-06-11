import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <h3>
          Designed and Developed by{" "}
          <span>
            <a href="https://jesuisabraham.netlify.app/" target="_blank">
              Abraham
            </a>
          </span>
        </h3>

        <div className="icons">
          <a href="https://github.com/Shurrd" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="icon"></FontAwesomeIcon>
          </a>
          <a href="https://twitter.com/shurrrrd" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              className="icon"
            ></FontAwesomeIcon>
          </a>

          <a
            href="https://www.linkedin.com/in/adeoluwa-adeyemi-45743222b/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="icon"
            ></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
