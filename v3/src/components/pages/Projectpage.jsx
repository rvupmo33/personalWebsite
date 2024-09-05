import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "../Cards/ProjectCard";
import HappyHabits from "../../images/project/HappyHabits.png";
import CritiqueImg from "../../images/project/CritiqueImg.png";
import SonifyImg from "../../images/project/SonifyImg.png";

const Projectpage = () => {
  return (
    <div>
      <div className="mt-[60px]">
        <Link
          to="/"
          className="flex items-center gap-2 hover:gap-3 transition-all duration-300 ease-in-out text-[#c9cbcb] w-fit"
        >
          <ArrowLeft size={13} />
          <h1 className="text-sm">Home</h1>
        </Link>
        <h1 className="text-2xl font-semibold mt-[20px]">Projects</h1>
        <p className="mt-1 text-md font-normal text-[#b3b5b5] mb-14">
          Making websites that leave an impression
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
          <ProjectCard
            to="#"
            title="Critique"
            description="Rate My Professor Website"
            image={CritiqueImg}
          />
          <ProjectCard
            to="#"
            title="HappyHabits AI"
            description="Landing page"
            image={HappyHabits}
          />
          <ProjectCard
            to="#"
            title="Sonify"
            description="Landing page"
            image={SonifyImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Projectpage;
