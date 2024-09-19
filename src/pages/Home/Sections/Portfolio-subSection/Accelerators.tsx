import Card from "../../../../components/Card/Card";
import { accelerators } from "../Data-sets/accelerators";

function Accelerators() {
  return (
    // <div className="mt-8 bg-[#ededed] pmd:px-32 px-20 py-3">
    //   <h3 className="text-xl sm:text-2xl font-semibold mt-10">ACCELERATORS</h3>
    //   <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 pmd:grid-cols-3 gap-6 mt-8">
    //     {accelerators.map((project, index) => (
    //       <Card key={index} project={project} show={true} />
    //     ))}
    //   </div>
    // </div>
    <div className="mt-8 bg-[#ededed] ">
      <div className=" py-10 md:px-20 pmd:px-32 px-5">
        <span className="text-2xl font-semibold">ACCELERATORS</span>
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 pmd:grid-cols-3 gap-6 mt-8">
          {accelerators.map((project, index) => (
            <Card key={index} project={project} show={true} />
          ))}
        </div>
        {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6 mt-8">
          {accelerators.map((project, index) => (
            <Card key={index} project={project} show={true} />
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Accelerators;
