import ExperienceCard from "./Cards/ExperienceCard";
import RelyCapitalLogo from "../images/logo/RelyCapitalLogo.jpeg";
import HeadstarterLogo from "../images/logo/headstarterLogo.jpeg";
import LassondeLogo from "../images/logo/LassondeLogo.jpeg";

const Experience = () => {
  return (
    <>
      <div className=" rounded-md  mb-[70px]">
        <h1 className="text-md font-[600]">Work Experience</h1>
        <p className="mt-1 text-sm font-normal text-[#b3b5b5] mb-5">
          Transforming ideas into digital solutions
        </p>
        <div className="flex flex-col gap-2">
          <ExperienceCard
            title="Software Developer"
            logo={RelyCapitalLogo}
            desc="Rely Capital · Remote"
            date="Jun 2024 - Aug 2024"
          />
          <ExperienceCard
            title="Software Engineer Fellow"
            logo={HeadstarterLogo}
            desc="HeadstarterAI · Remote"
            date="Jun 2024 - Aug 2024"
          />
          <ExperienceCard
            title="High School Lab Assistant"
            logo={LassondeLogo}
            desc="York University · Contract Full-time"
            date="Jun 2024 - Aug 2024"
          />
        </div>
      </div>
    </>
  );
};

export default Experience;
