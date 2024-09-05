const SkillsCard = ({ icon, img, title, description }) => {
  return (
    <div>
      <div className="relative transition-colors duration-300 ease-in-out border border-transparent border-[#2B3952] cursor-default py-2 px-4 rounded-md flex gap-4 items-center text-white bg-[#1f2a3e] hover:bg-[#222E43] ">
        <div>
          <h1 className="text-sm font-[600]">{title}</h1>
          <p className="text-sm font-normal text-[#b3b5b5]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
