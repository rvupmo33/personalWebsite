import { Link } from "react-router-dom";
import SkillsCard from "./Cards/SkillsCard";
import { ChevronRight } from "lucide-react";

const Skills = () => {
  return (
    <div className="mb-[70px]">
      <h1 className="text-md font-semibold">Core Stack</h1>
      <p className="mt-1 text-sm font-normal text-[#b3b5b5]">
        Languages, Frameworks, Tools, and Software
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
        <SkillsCard title="React" description="Web UI library" />
        <SkillsCard title="Figma" description="Design tool" />
        <SkillsCard title="Node.js" description="JS runtime" />
        <SkillsCard title="C Sharp" description="Coding language" />
        <SkillsCard title="Git" description="Version control" />

        <SkillsCard title="Git" description="Version control" />

        <SkillsCard title="Firebase" description="Backend services" />

        <SkillsCard title="Rest API" description="Web service" />
        <SkillsCard title="Visual Studio" description="Code editor" />
      </div>
      <div className="flex justify-end mt-7">
        <Link
          to="/stack"
          className="flex items-center gap-2 rounded-sm py-2 px-4 font-regular text-[#b3b5b5]  transition-all duration-300 ease-in-out hover:gap-3 text-sm"
        >
          View More
          <ChevronRight size={15} />
        </Link>
      </div>
    </div>
  );
};

export default Skills;
