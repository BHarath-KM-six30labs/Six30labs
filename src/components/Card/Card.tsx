import React from 'react';

interface Project {
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
  console.log(show);
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <h3 className="font-bold mb-2">{project.name}</h3>
      <p className="text-[12px] font-semibold">{project.description}</p>
      {show && (
        <p className="mt-2 text-[11px] text-gray-600">{project.details}</p>
      )}
    </div>
  );
}

export default Card;
