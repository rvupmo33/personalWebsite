import { FilePen, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="mb-[70px]">
      <h1 className="mt-[120px] text-[35px] mb-[px] font-[600]">
        Hi, I&apos;m Ayesha 👋
      </h1>
      <p className="text-[18px]">
        {/* I&apos;m*/} A full-stack software developer.
      </p>
      <div className="mt-5 flex items-center gap-[10px]">
        <p>
          <a
            href="mailto:bilalayesha235@gmail.com"
            className="bg-[#1f2a3e] hover:bg-[#253148] border border-[#323F5C] py-2 px-4 rounded-md text-sm font-medium w-fit flex items-center gap-2"
          >
            <Mail size={14} />
            Email Me
          </a>
        </p>
        <p>
          <Link
            to="/resume"
            className="bg-[#111827] hover:bg-[#161F31] border border-[#323F5C] py-2 px-4 rounded-md text-sm font-medium w-fit flex items-center gap-2"
          >
            <FilePen size={14} />
            Resume
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Hero;
