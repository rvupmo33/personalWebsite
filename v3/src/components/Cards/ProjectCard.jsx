import { Link } from "react-router-dom";

const ProjectCard = ({ to, title, description, image }) => {
  return (
    <Link
      to={to}
      className="relative block overflow-hidden rounded-md transition-colors duration-300 ease-in-out bg-[#1f2a3e] hover:bg-[#222E43] cursor-pointer"
    >
      <div className="relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-50"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-sm font-semibold">{title}</p>
          <p className="mt-1 text-sm font-normal text-[#b3b5b5]">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
