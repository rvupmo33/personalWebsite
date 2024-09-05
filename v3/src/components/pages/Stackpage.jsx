import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import SkillsCard from "../Cards/SkillsCard";

const Stackpage = () => {
  return (
    <div>
      <div>
        <div className="mt-[60px]">
          <Link
            to="/"
            className="flex items-center gap-2 hover:gap-3 transition-all duration-300 ease-in-out text-[#c9cbcb] w-fit"
          >
            <ArrowLeft size={13} />
            <h1 className="text-sm">Home</h1>
          </Link>
          <h1 className="text-2xl font-semibold mt-[20px]">Core Stack</h1>
          <p className="mt-1 text-md font-normal text-[#b3b5b5] mb-14">
            Languages, Frameworks, Tools, and Software
          </p>

          {/* Languages & Frameworks */}
          <h1 className="text-md font-semibold">Languages & Frameworks</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
            <SkillsCard title="React" description="Web UI library" />
            <SkillsCard title="Node.js" description="JS runtime" />
            <SkillsCard title="Next.js" description="Web framework" />
            <SkillsCard title="Rest API" description="Web service" />
            <SkillsCard title="C Sharp" description="Coding language" />
            <SkillsCard title="HTML" description="Markup language" />
            <SkillsCard title="CSS" description="Style sheet language" />
            <SkillsCard title="Javascript" description="Coding language" />
            <SkillsCard title="SQL Developer" description="Query language" />
          </div>

          {/* Tools & Software */}
          <h1 className="text-md font-semibold mt-[70px]">Tools & Software</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
            <SkillsCard title="Figma" description="Design tool" />
            <SkillsCard title="Git" description="Version control" />
            <SkillsCard title="Firebase" description="Backend services" />
            <SkillsCard title="Jest" description="Testing tool" />
            <SkillsCard title="Arc" description="Browser" />
          </div>

          {/* Development Environments */}
          <h1 className="text-md font-semibold mt-[70px]">
            Development Environments
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
            <SkillsCard title="Visual Studio" description="Code editor" />
            <SkillsCard title="Rider" description="IDE/Code editor" />
            <SkillsCard title="Sublime Text" description="Code editor" />
            <SkillsCard title="Ubuntu" description="Operating system" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stackpage;
