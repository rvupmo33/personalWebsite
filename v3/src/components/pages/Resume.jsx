import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ResumeImg from "../../images/Resume.png";

const Resume = () => {
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
        <h1 className="text-2xl font-semibold mt-[20px]">Resume</h1>
        <p className="mt-1 text-md font-normal text-[#b3b5b5] mb-14">
          Last Updated: Sep/4/2024
        </p>
        <img
          src={ResumeImg}
          alt="ResumeImg"
          className="rounded-md max-w-[700px] w-full m-auto"
        />
      </div>
    </div>
  );
};

export default Resume;
