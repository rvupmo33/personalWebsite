const ExperienceCard = (props) => {
  return (
    <div className="relative transition-colors duration-300 ease-in-out border border-transparent cursor-default py-2 px-4 rounded-md flex gap-4 text-white bg-[#1f2a3e] hover:bg-[#222E43] ">
      <img
        src={props.logo}
        className="w-[40px] h-[40px] rounded-sm overflow-hidden"
        alt="Company Logo"
      />
      <div className="sm:flex justify-between w-full">
        <div>
          <h1 className="text-sm font-semibold">{props.title}</h1>
          <p className="text-xs sm:text-sm font-normal text-[#b3b5b5]">
            {props.desc}
          </p>
        </div>
        <p className="text-xs sm:text-sm mt-1 text-[#b3b5b5]">{props.date}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
