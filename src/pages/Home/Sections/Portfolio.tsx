import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import { data } from "./Data-sets/Portfolio";
import { accelerators } from "./Data-sets/accelerators";
// import { motion } from "framer-motion";

function Portfolio() {
  return (
    <div className="mt-8 bg-[#ededed]">
      <div className=" px-5 md:px-20 pmd:px-32 py-10">
        <span className="text-xl sm:text-2xl font-semibold">PORTFOLIO</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-2 pmd:grid-cols-3 gap-6 mt-8">
       
          {data.map((project, index) => (
            <Card key={index} project={project} show={false} />
          ))}
          
        </div>
        {/* <h3 className="text-xl sm:text-2xl font-semibold mt-10">ACCELERATORS</h3> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-2 pmd:grid-cols-3 gap-6 mt-8">
          {accelerators.map((project, index) => (
            <Card key={index} project={project} show={false} />
          ))}
        </div>
        <div className="py-10 ">
          <Link to="portfolio">
            <Button text={"Learn More"} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
