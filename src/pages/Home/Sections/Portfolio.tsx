import Card from "../../../components/Card/Card";
import { data } from "./Data-sets/Portfolio";
import { accelerators } from "./Data-sets/accelerators";

function Portfolio() {
  return (
    <div className="mt-8 bg-[#ededed] ">
      <div className="px-24 py-10">
        <span className="text-2xl font-semibold">PORTFOLIO</span>
        <div className="grid grid-cols-3 gap-6 mt-8">
          {data.map((project, index) => (
            <Card key={index} project={project} show={false} />
          ))}
        </div>
        <h3 className="text-2xl font-semibold mt-10">ACCELERATORS</h3>
        <div className="grid grid-cols-3 gap-6 mt-8">
          {accelerators.map((project, index) => (
            <Card key={index} project={project}  show={false}/>
          ))}
        </div>
        <div className="py-10 ">
          <button className="border border-black px-3 py-2">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
