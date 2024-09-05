import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero() {
  return (
    <div className="">
      <section className="introSection">
        <div className="introText">
          <h1 id="intro">Hi, Im AB 👋</h1>
          <p>
            A full-stack software developer with a primary focus in front-end
            design <span id="typingAnim">|</span>
          </p>
          <div className="locationContainer">
            <p id="myLocation">
              <FontAwesomeIcon icon={faLocationDot} size="sm" />
              &nbsp; I&apos;m based in <i>Ontario, Canada</i>
            </p>
          </div>
        </div>
        <hr />
      </section>
    </div>
  );
}

export default Hero;
