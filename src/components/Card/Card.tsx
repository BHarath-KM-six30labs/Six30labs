import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
  const acc  = useLocation();
  // console.log(acc.pathname ,"ps")
  const service = acc.pathname.split("/")
  const serviceParam = service[service.length-1]
  // console.log(serviceParam)
  const navigate = useNavigate();
  // console.log(acc,acc)
  return (
    <>
     <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }} 
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} 
          >
      <div
        className={`relative bg-white p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 min-h-80 ${(acc.pathname === '/portfolio'|| acc.pathname === '/portfolio/accelerators') ? 'min-h-[30rem]':''}`}
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
            <p className="mt-2 text-[11px] text-gray-600 mb-6">{project.details}</p>
            {project.button && (
              <button
                className="mt-2 text-[11px] text-[#41B98C]  px-3 py-2 absolute bottom-0 right-0"
                onClick={() => {
                  // setShowDetails(!showDetails);
                  navigate(`/portfolio/view-more/${serviceParam}/${project.id}`, { state: { project } });
                }}
              >
                View Details
              </button>
            )}
          </>
        )}
      </div>
      </motion.div>
      {/* {showDetails && (
        <>
          <p className="mt-2 text-[11px] text-gray-600">{project.details}</p>
        </>
      )} */}
    </>
  );
};

export default Card;
