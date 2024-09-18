import Card from "../../../../components/Card/Card";
import { accelerators } from "../Data-sets/accelerators";

function Accelerators() {
  return (
    <div className="mt-8 bg-[#ededed] px-4 sm:px-8 md:px-16 lg:px-32 py-3">
      <h3 className="text-xl sm:text-2xl font-semibold mt-10">ACCELERATORS</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {accelerators.map((project, index) => (
          <Card key={index} project={project} show={true} />
        ))}
      </div>
    </div>
  );
}

export default Accelerators;
