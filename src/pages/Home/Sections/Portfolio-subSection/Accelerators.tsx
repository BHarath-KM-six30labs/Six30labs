
import Card from "../../../../components/Card/Card";
import { accelerators } from "../Data-sets/accelerators";
function Accelerators() {
  return (
    <>
     <div className="mt-8 bg-[#ededed] md:px-32 px-5 py-3">
      <h3 className="text-2xl font-semibold mt-10">ACCELERATORS</h3>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-8">
        {accelerators.map((project, index) => (
          <Card key={index} project={project} show={true} />
        ))}
      </div>
      </div>
    </>
  );
}

export default Accelerators;
