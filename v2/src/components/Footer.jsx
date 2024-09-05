import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div>
      <br />
      <br />
      <footer>
        <p id="getInContactText">
          If you&apos;re considering collaboration or have an opportunity in
          mind, don&apos;t hesitate to reach out. Just send me a message with
          your idea 😋
        </p>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/ayesha-b-3a2966295/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="xl"
              style={{ color: "#ffffff" }}
            />
          </a>
          <a href="https://github.com/rvupmo33" target="_blank">
            <FontAwesomeIcon
              icon={faSquareGithub}
              size="xl"
              style={{ color: "#ffffff" }}
            />
          </a>
          <a href="mailto:bilalayesha235@gmail.com?" target="_blank">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="xl"
              style={{ color: "#ffffff" }}
            />
          </a>
        </div>
        <p id="footerStatement">
          &#x3c; Designed /&#x3e; with{" "}
          <FontAwesomeIcon icon={faHeart} style={{ color: "#983434" }} /> By AB.
        </p>
        <br />
        <br />
      </footer>
    </div>
  );
};

export default Footer;
