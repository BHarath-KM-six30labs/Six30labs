import cube from "../../assets/cube.png";
import Carousel from "./Sections/Carousel";
import Experiecnce from "./Sections/Experiecnce";
import Portfolio from "./Sections/Portfolio";

function Home() {
  return (
    <>
      <div className="mmd:flex flex-wrap">
        <div className="flex flex-1 flex-col pmd:ml-32 sm:ml-20 ml-5">
          <span className="mt-[80px] leading-[45px]">
            <span className="font-bold mmd:text-7xl sm:text-6xl text-5xl">
              ENGINEERING <br />
            </span>
            <span className="mmd:text-5xl sm:text-4xl text-4xl font-semibold">
              INNOVATION AND DESIGNING  THE FUTURE
            </span>
            <br />
          </span>
          <span className="leading-8 mt-5 tracking-wide mmd:mr-0 sm:mr-20 mr-5">
            In a fast-changing tech world, Six30 Labs (formerly Aspelec
            Technologies), founded in 2011, delivers innovative, high-quality
            software solutions. Our global team specializes in mobile
            experiences, HRMS, CRM systems, and custom web applications for
            businesses of all sizes. At Six30 Labs, we prioritize creativity,
            design-centric thinking, and excellence to drive success and growth.
          </span>
        </div>
        <div className="flex flex-1 items-center justify-center mt-10 mmd:mt-0">
          <img src={cube} alt="3D Cube" className="w-[20rem] h-[20rem] mmd:w-[26rem] mmd:h-[26rem]" />
        </div>
      </div>
      <Experiecnce />
      <Portfolio />
      <div className="flex justify-center items-center gap-6 mt-8">
        <span className="flex items-center gap-2">
          <hr className="w-8 border-[#41B98C]" />
          <span className="text-[#41B98C]">TESTIMONIAL</span>
          <hr className="w-8 border-[#41B98C]" />
        </span>
      </div>
      <Carousel />
    </>
  );
}

export default Home;
