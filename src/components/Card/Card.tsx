import React from "react";
import { useNavigate } from "react-router-dom";

interface Project {
  id?: number;
  button?: boolean;
  image: string;
  name: string;
  description: string;
  details: string;
}

interface CardProps {
  project: Project;
  show: boolean;
}

const Card: React.FC<CardProps> = ({ project, show }) => {
  // const [showDetails, setShowDetails] = useState(false);
  const acc = "accelerators";
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`relative bg-white p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105`}
      >
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-40 object-cover mb-4 rounded"
        />
        <h3 className="font-bold mb-2">{project.name}</h3>
        <p className="text-[13px] font-semibold">{project.description}</p>
        {show && (
          <>
            <p className="mt-2 text-[11px] text-gray-600">{project.details}</p>
            {project.button && (
              <button
                className="mt-2 text-[11px] text-[#41B98C]  px-3 py-2 absolute bottom-0 right-0"
                onClick={() => {
                  // setShowDetails(!showDetails);
                  navigate(`/portfolio/view-more/${project.id}`);
                }}
              >
                View Details
              </button>
            )}
          </>
        )}
      </div>
      {/* {showDetails && (
        <>
          <p className="mt-2 text-[11px] text-gray-600">{project.details}</p>
        </>
      )} */}
    </>
  );
};

export default Card;
