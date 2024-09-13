import React from 'react';

const ProcessSection: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 animate__animated animate__fadeInUp">
      <h2 className="text-3xl font-bold mb-6">Our Process</h2>
      <ul className="list-none space-y-6">
        <li className="relative pl-8">
          <h4 className="text-xl font-semibold text-blue-600">Idea</h4>
          <p className="mt-2 text-gray-700">Analyze requirement through in-depth research with the help of brilliant tools.</p>
          <span className="absolute left-0 top-0 w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full">
            <span className="text-sm">1</span>
          </span>
        </li>
        <li className="relative pl-8">
          <h4 className="text-xl font-semibold text-green-600">Sketch</h4>
          <p className="mt-2 text-gray-700">Draft the design related to the research in order to check for feasibility.</p>
          <span className="absolute left-0 top-0 w-6 h-6 bg-green-600 text-white flex items-center justify-center rounded-full">
            <span className="text-sm">2</span>
          </span>
        </li>
        <li className="relative pl-8">
          <h4 className="text-xl font-semibold text-red-600">Design</h4>
          <p className="mt-2 text-gray-700">After completing feasibility test, final design is prepared by using smart tools.</p>
          <span className="absolute left-0 top-0 w-6 h-6 bg-red-600 text-white flex items-center justify-center rounded-full">
            <span className="text-sm">3</span>
          </span>
        </li>
        <li className="relative pl-8">
          <h4 className="text-xl font-semibold text-yellow-600">Develop</h4>
          <p className="mt-2 text-gray-700">Development team starts developing the solution according to design.</p>
          <span className="absolute left-0 top-0 w-6 h-6 bg-yellow-600 text-white flex items-center justify-center rounded-full">
            <span className="text-sm">4</span>
          </span>
        </li>
        <li className="relative pl-8">
          <h4 className="text-xl font-semibold text-purple-600">Test</h4>
          <p className="mt-2 text-gray-700">Test every component to make sure that our solution fits the requirement.</p>
          <span className="absolute left-0 top-0 w-6 h-6 bg-purple-600 text-white flex items-center justify-center rounded-full">
            <span className="text-sm">5</span>
          </span>
        </li>
        <li className="relative pl-8">
          <h4 className="text-xl font-semibold text-pink-600">Celebrate</h4>
          <p className="mt-2 text-gray-700">Deliver solution and assist our clients to control and administer the solution.</p>
          <span className="absolute left-0 top-0 w-6 h-6 bg-pink-600 text-white flex items-center justify-center rounded-full">
            <span className="text-sm">6</span>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default ProcessSection;
