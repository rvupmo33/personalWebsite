import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HappyAssistant from "../assets/HappyAssistant.png";
import SimplyPantry from "../assets/Simply Pantry.png";
import HappyHabits from "../assets/Happy Habits AI.png";
import Placeholder from "../assets/placeholder.jpg";

const ProjectSec = () => {
  return (
    <div>
      <h1>Featured Projects</h1>
      <div className="projectCardContainer">
        {}
        <div className="projectRow">
          <div className="holder">
            <div className="PAPER">
              <img src={HappyAssistant} alt="" />
            </div>
            <div className="projectCard">
              <h2>HappyAssistant</h2>
              <p id="projectDesc">
                HappyAssistant is a chatbot designed to provide information
                about HappyHabitsAI, a company dedicated to helping people build
                healthy habits and boost confidence.
              </p>
              <div className="tags">
                <p className="tag">Gemini API</p>
                <p className="tag">React</p>
              </div>
              <div className="projectLinks">
                <a
                  href="https://github.com/rvupmo33/ChatBot_V1"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithubAlt} size="lg" />
                </a>
                {/* <a href="" target="_blank">
                  <FontAwesomeIcon icon={faLink} size="lg" />
                </a> */}
              </div>
            </div>
          </div>
          {}
          <div className="holder">
            <div className="PAPER">
              <img src={SimplyPantry} alt="" />
            </div>
            <div className="projectCard">
              <h2>SimplyPantry</h2>
              <p id="projectDesc">
                SimplyPantry helps you efficiently manage your kitchen
                essentials effortlessly. Track inventory, plan meals, and reduce
                food waste with ease.
              </p>
              <div className="tags">
                <p className="tag">Firestore</p>
                <p className="tag">React</p>
              </div>
              <div className="projectLinks">
                <a
                  href="https://github.com/rvupmo33/inventoryManager"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithubAlt} size="lg" />
                </a>
                <a
                  href="https://inventory-manager-rvu.vercel.app/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLink} size="lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {}
        {}
        <div className="projectRow">
          <div className="holder">
            <div className="PAPER">
              <img src={HappyHabits} alt="" />
            </div>
            <div className="projectCard">
              <h2>HappyHabits AI Launch Page</h2>
              <p id="projectDesc">
                This is a waitlist page for HappyHabits AI, an upcoming app
                designed to help users build positive habits and stay motivated.
              </p>
              <div className="tags">
                <p className="tag">React</p>
                <p className="tag">Supabase</p>
                <p className="tag">Google Analytics</p>
              </div>
              <div className="projectLinks">
                <a
                  href="https://github.com/rvupmo33/HappyHabitsAI-LaunchPage"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithubAlt} size="lg" />
                </a>
                <a href="https://happyhabitsai.netlify.app/" target="_blank">
                  <FontAwesomeIcon icon={faLink} size="lg" />
                </a>
              </div>
            </div>
          </div>
          {}
          <div className="holder">
            <div className="PAPER">
              <img src={Placeholder} alt="" />
            </div>
            <div className="projectCard">
              <h2>(WIP)</h2>
              <p id="projectDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                exercitationem totam illum, repudiandae dignissimos modi! Lorem
                ipsum dolor sit amet.
              </p>
              <div className="tags">
                <p className="tag">X</p>
                <p className="tag">X</p>
                <p className="tag">X</p>
                <p className="tag">X</p>
              </div>
              <div className="projectLinks">
                <a href="" target="_blank">
                  <FontAwesomeIcon icon={faGithubAlt} size="lg" />
                </a>
                <a href="" target="_blank">
                  <FontAwesomeIcon icon={faLink} size="lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {}
      </div>
      <hr />
    </div>
  );
};

export default ProjectSec;
