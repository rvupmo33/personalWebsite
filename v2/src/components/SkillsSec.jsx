import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faGit,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faUbuntu,
} from "@fortawesome/free-brands-svg-icons";
import { faHashtag, faJ, faN, faR } from "@fortawesome/free-solid-svg-icons";

const SkillsSec = () => {
  return (
    <div>
      <h1>Skills</h1>
      <div className="skillsContainer">
        <div>
          <FontAwesomeIcon icon={faHtml5} />
          <p>HTML</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faCss3Alt} />
          <p>CSS</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faReact} />
          <p>React</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faJs} />
          <p>Javascript</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faNodeJs} />
          <p>Node JS</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-mongodb"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3v19" />
            <path d="M18 11.227c0 3.273 -1.812 4.77 -6 9.273c-4.188 -4.503 -6 -6 -6 -9.273c0 -4.454 3.071 -6.927 6 -9.227c2.929 2.3 6 4.773 6 9.227z" />
          </svg>
          <p>MongoDB</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faHashtag} />
          <p>C Sharp</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faGit} />
          <p>Git</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-vscode"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M16 3v18l4 -2.5v-13z" />
            <path d="M9.165 13.903l-4.165 3.597l-2 -1l4.333 -4.5m1.735 -1.802l6.932 -7.198v5l-4.795 4.141" />
            <path d="M16 16.5l-11 -10l-2 1l13 13.5" />
          </svg>
          <p>VS Code</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faR} />
          <p>Rider</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faUbuntu} />
          <p>Ubuntu</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faJ} />
          <p>Jest</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-api"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 13h5" />
            <path d="M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3" />
            <path d="M20 8v8" />
            <path d="M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5" />
          </svg>
          <p>Rest APIs</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faN} />
          <p>NextJS</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsSec;
