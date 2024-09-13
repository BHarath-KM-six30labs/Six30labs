import {data} from "./Data-sets/Portfolio";

function Portfolio() {

  

  return (
    <div className="mt-8 bg-[#ededed] ">
      <div className="px-24 py-10">
        <span className="text-2xl font-semibold">PORTFOLIO</span>
        <div className="grid grid-cols-3 gap-6 mt-8">
          {data.map((project, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className=" font-bold mb-2">{project.name}</h3>
              <p className="text-sm">{project.description}</p>
              <p className="mt-2 text-[12px] text-gray-600">{project.details}</p>
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-semibold mt-10">ACCELERATORS</h3>
        <div className="grid grid-cols-3 gap-6 mt-8">
          {/* {accelerators.map((project, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className=" font-bold mb-2">{project.name}</h3>
              <p className="text-sm">{project.description}</p>
              <p className="mt-2 text-[12px] text-gray-600">{project.details}</p>
            </div>
          ))} */}
        </div>
      </div>
      
        
      </div>
    
  );
}

export default Portfolio;
