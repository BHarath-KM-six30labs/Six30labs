import { data } from "../Data-sets/Portfolio";
import { accelerators } from "../Data-sets/accelerators";
import Card from "../../../../components/Card/Card";
import { useEffect } from "react";

function SubPortfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-8 bg-[#ededed] ">
      <div className="px-32 py-10">
        <span className="text-2xl font-semibold">PORTFOLIO</span>
        <div className="grid grid-cols-3 gap-6 mt-8">
          {data.map((project, index) => (
            <Card key={index} project={project} show={true} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-6 mt-8">
          {accelerators.map((project, index) => (
            <Card key={index} project={project} show={true} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubPortfolio;
