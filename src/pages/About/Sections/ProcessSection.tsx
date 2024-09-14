import React from "react";
import process from "../../../assets/About/process-ver2.png";

const ProcessSection: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex flex-1 justify-center items-center">
        <img src={process} alt="process" className="w-96 h-92" />
      </div>
      <div className="flex flex-1">
        <div className="relative w-full md:w-1/2">
         
          <ul className="list-none space-y-8">
            <li className="relative pl-10">
              <h4 className="text-lg font-semibold text-[#41ba8e]">Idea</h4>
              <p className="mt-1 text-gray-700 text-xs">
                Analyze requirement through in-depth research with the help of
                brilliant tools.
              </p>
              <span className="absolute left-0 top-[6.5px] w-5 h-5 bg-[#41ba8e] text-white flex items-center justify-center rounded-full">
                <span className="text-xs">1</span>
              </span>
              <div className="absolute left-2 top-1/2 w-0.5 h-full bg-gray-300"></div>
            </li>
            <li className="relative pl-10">
              <h4 className="text-lg font-semibold text-[#ba5741]">Sketch</h4>
              <p className="mt-1 text-gray-700 text-xs">
                Draft the design related to the research in order to check for
                feasibility.
              </p>
              <span className="absolute left-0 top-[6px] w-5 h-5 bg-[#ba5741] text-white flex items-center justify-center rounded-full">
                <span className="text-xs">2</span>
              </span>
              <div className="absolute left-2 top-1/2 w-0.5 h-full bg-gray-300"></div>
            </li>
            <li className="relative pl-10">
              <h4 className="text-lg font-semibold text-[#1b6e4f]">Design</h4>
              <p className="mt-1 text-gray-700 text-xs">
                After completing feasibility test, final design is prepared by
                using smart tools.
              </p>
              <span className="absolute left-0 top-[6px] w-5 h-5 bg-[#1b6e4f] text-white flex items-center justify-center rounded-full">
                <span className="text-xs">3</span>
              </span>
              <div className="absolute left-2 top-1/2 w-0.5 h-full bg-gray-300"></div>
            </li>
            <li className="relative pl-10">
              <h4 className="text-lg font-semibold text-[#41ba8e]">Develop</h4>
              <p className="mt-1 text-gray-700 text-xs">
                Development team starts developing the solution according to
                design.
              </p>
              <span className="absolute left-0 top-[6px] w-5 h-5 bg-[#41ba8e] text-white flex items-center justify-center rounded-full">
                <span className="text-xs">4</span>
              </span>
              <div className="absolute left-2 top-1/2 w-0.5 h-full bg-gray-300"></div>
            </li>
            <li className="relative pl-10">
              <h4 className="text-lg font-semibold text-[#ba5741]">Test</h4>
              <p className="mt-1  text-gray-700 text-xs">
                Test every component to make sure that our solution fits the
                requirement.
              </p>
              <span className="absolute left-0 top-[6px] w-5 h-5 bg-[#ba5741] text-white flex items-center justify-center rounded-full">
                <span className="text-xs">5</span>
              </span>
              <div className="absolute left-2 top-1/2 w-0.5 h-full bg-gray-300"></div>
            </li>
            <li className="relative pl-10">
              <h4 className="text-lg font-semibold text-[#1b6e4f]">
                Celebrate
              </h4>
              <p className="mt-1 text-gray-700 text-xs">
                Deliver solution and assist our clients to control and
                administer the solution.
              </p>
              <span className="absolute left-0 top-[6px] w-5 h-5 bg-[#1b6e4f] text-white flex items-center justify-center rounded-full">
                <span className="text-xs">6</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
