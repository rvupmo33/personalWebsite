import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <div className="py-10 flex flex-col items-center w-full text-center">
      <hr className="opacity-40 mb-8 w-full" />
      <h1 className="text-sm max-w-[500px] text-[#b3b5b5]">
        If you have an opportunity or idea in mind, don&apos;t hesitate to reach
        out. Just send me a message on LinkedIn with your idea 😋
      </h1>
      <div className="pt-5 flex gap-6">
        <a
          href="https://www.linkedin.com/in/ayesha-bilal235"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} className="cursor-pointer" />
        </a>
        <a
          href="https://github.com/rvupmo33"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <Github size={20} className="cursor-pointer" />
        </a>
        <a href="mailto:bilalayesha235@gmail.com" aria-label="Email">
          <Mail size={20} className="cursor-pointer" />
        </a>
      </div>
      <p className="text-xs pt-5">
        &#x3c; Designed /&#x3e; with{" "}
        <FontAwesomeIcon icon={faHeart} style={{ color: "#983434" }} /> in 2024
      </p>
    </div>
  );
};

export default Footer;
