import about from "../../assets/About/about_Empo_2e8775b503.png";
import Locations from "../../components/Locations/Locations";
import Experiecnce from "../Home/Sections/Experiecnce";
import AboutSection from "./Sections/AboutSection";
import Approach from "./Sections/Approach";
import History from "./Sections/History";
import ProcessSection from "./Sections/ProcessSection";

function About() {
  return (
    <>
      <div className="flex bg-[#f7f7f7]  pb-16">
        <div className="flex flex-1 flex-col  ml-32 pt-16  ">
          <span className=" mt-14 ">
            <span className="text-7xl font-bold  ">
              Elevating Businesses and Startups to New Heights.
            </span>
          </span>
          <span className=" text-xl text-gray-500 leading-8  mt-10 tracking-wide">
            Unleash your full potential with Six36Labs, your trusted partner for
            IT-enabled and IT-driven businesses.
          </span>
        </div>
        <div className="flex flex-1 items-center justify-center  pt-20 ">
          <img
            src={about}
            alt="about"
            className="w-[26rem] h-[20rem] transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      <div className="mb-8">
        <Experiecnce />
      </div>
      <AboutSection />
      <Locations />
      <History />
      <h2 className="text-3xl mt-8 ml-32 font-bold mb-6">Our Process</h2>
      <ProcessSection />
      <Approach />
    </>
  );
}

export default About;
