import { Github } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed w-full p-[23px] h-[35px] overflow-hidden flex items-center justify-end z-[1000] gap-2">
      <div className="ml-[7px] text-[#dbdbdb] py-[5px] px-[20px] rounded-md bg-[#111827] border border-[#64748b] flex items-center gap-[10px] z-[200] ">
        <div className="flex items-center justify-center">
          <div className="circle"></div>
          <div className="bg-[green] w-[7px] h-[7px] absolute rounded-full"></div>
        </div>
        <p className="text-[13px] cursor-default">Open For Work</p>
      </div>
      <a
        href="https://drive.google.com/file/d/17FyOY6oTg1N--do7KYym25cg6mTfuh8c/view?usp=sharing"
        target="_blank"
      >
        <div className=" cursor-pointer text-[13px] rounded-md text-white z-[200] flex items-center py-[5px] px-[10px] rounded-md bg-[#111827] border border-[#64748b] hover:bg-[#161F31]">
          <a
            href="https://github.com/rvupmo33"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <Github size={20} className="cursor-pointer" />
          </a>
        </div>
      </a>
    </header>
  );
};

export default Header;
