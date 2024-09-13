import cube from "../../assets/cube.png";
import Experiecnce from "./Sections/Experiecnce";
import KnowMore from "./Sections/KnowMore";
import Portfolio from "./Sections/Portfolio";
import SnippetServices from "./Sections/SnippetServices";

function Home() {
  return (
    <>
      <div className="flex ">
        <div className="flex flex-1 flex-col  ml-24 ">
          <span className="leading-10  mt-20">
            <span className="text-5xl">
              ENGINEERING <br />
            </span>
            <span className="text-4xl">
              INNOVATION AND DESIGNING THE FUTURE
            </span>
            <br />
          </span>
          <span className="text-sm leading-6 mt-5 tracking-wide">
            In a fast-changing tech world, Six30 Labs (formerly Aspelec
            Technologies), founded in 2011, delivers innovative, high-quality
            software solutions. Our global team specializes in mobile
            experiences, HRMS, CRM systems, and custom web applications for
            businesses of all sizes. At Six30 Labs, we prioritize creativity,
            design-centric thinking, and excellence to drive success and growth.
          </span>
        </div>
        <div className="flex flex-1 items-center ">
          <img src={cube} alt="" className="w-[26rem] h-[26rem]" />
        </div>
      </div>
      <>
        <Experiecnce />
      </>
      <>
        <Portfolio />
      </>
      <>
        <KnowMore />
      </>
      <>
        <SnippetServices />
      </>
     
    </>
  );
}

export default Home;
