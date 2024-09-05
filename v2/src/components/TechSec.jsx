import RelyCapitalLogo from "../assets/RelyCapitalLogo.jpeg";
import HeadstarterLogo from "../assets/headstarterLogo.jpeg";

const TechSec = () => {
  return (
    <div>
      <h1>Tech Experience</h1>
      <div className="experienceCardContainer">
        <div className="experienceCard">
          <img src={RelyCapitalLogo} alt="Rely Capital Logo" />
          <div className="experienceInfo">
            <div className="flex">
              <p id="experienceCompany">Rely Capital</p>
              <p id="experienceDate">June 2024 - Sep 2024</p>
            </div>
            <p id="experienceTitle">Software Developer Intern</p>
            <p id="experienceDesc">
              Developed and maintained an open-source cap table management tool
              for Emerging Funds and Solo GPs. Enhanced functionality by
              collaborating with a remote team to implement new features and
              resolve issues.
            </p>
          </div>
        </div>
        {}
        <div className="experienceCard">
          <img src={HeadstarterLogo} alt="Headstarter Logo" />
          <div className="experienceInfo">
            <div className="flex">
              <p id="experienceCompany">Headstarter AI</p>
              <p id="experienceDate">July 2024 - Present</p>
            </div>
            <p id="experienceTitle">Software engineering fellow</p>
            <p id="experienceDesc">
              Developing five AI projects and a Final Team Project as part of
              Track A. Collaborating with a team to design, implement, and
              enhance AI solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSec;
