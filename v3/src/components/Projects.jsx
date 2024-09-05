import { Link } from "react-router-dom";
import ProjectCard from "./Cards/ProjectCard";
import HappyHabits from "../images/project/HappyHabits.png";
import CritiqueImg from "../images/project/CritiqueImg.png";
import { ChevronRight } from "lucide-react";

const Projects = () => {
  return (
    <div className="rounded-md bg-[#111725] mb-[70px]">
      <h1 className="text-md font-semibold">Featured Projects</h1>
      <p className="mt-1 text-sm font-normal text-[#b3b5b5]">
        Making websites that leave an impression (WIP)
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
      </div>
      <div className="flex justify-end mt-7">
        <Link
          to="/projects"
          className="flex items-center gap-2 rounded-sm py-2 px-4 font-regular text-[#b3b5b5]  transition-all duration-300 ease-in-out hover:gap-3 text-sm"
        >
          View More
          <ChevronRight size={15} />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
