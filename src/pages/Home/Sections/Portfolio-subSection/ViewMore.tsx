import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ViewMore: React.FC = () => {
  const location = useLocation();
  const { project } = location.state || {};
  console.log(project);

  if (!project) {
    return (
      <div className="text-red-500 text-center text-xl">
        No project details available.
      </div>
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 mt-8">
      <div className="py-10 md:px-32 px-5 rounded-lg shadow-lg bg-white">
        <div className="p-6 bg-[#41B98C] text-white rounded-lg">
          <p className="text-sm tracking-wider">
            {project.content[0].namedetail}
          </p>
          <h3 className="text-2xl py-4 font-bold mt-2 tracking-wide">
            {project.content[0].heading}
          </h3>
          <ul className="list-disc list-inside mt-2">
            {project.content[0].list.map((item: string, index: number) => (
              <li
                key={index}
                className="p-2 rounded-md mt-1 bg-[#34a76f] tracking-wider"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <h4 className="mt-6 text-2xl text-center py-3 font-semibold text-gray-800">
          Testimonials
        </h4>
        <p className="text-gray-600 text-lg text-center mb-6">
          Here's what our clients have to say about our Help Desk Software:
        </p>
        <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.content[0].testimonials.map((testimonial: string, index: number) => (
            <li
              key={index}
              className="shadow-md bg-white p-4 rounded-md border relative flex flex-col justify-between min-h-[11rem]"
            >
              <div className="flex-grow">
                {testimonial}
              </div>
              <div className="flex items-center gap-4 mt-4">
                <p className="border-2 border-[#41B98C] rounded-full p-2"></p>
                <p className="font-semibold">
                  {index % 2 === 0 ? "Client A" : "Client B"}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ViewMore;
