import about from "../../assets/About/about_Empo_2e8775b503.png";
import Locations from "../../components/Locations/Locations";
import Experiecnce from "../Home/Sections/Experiecnce";
import AboutSection from "./AboutSection";
import History from "./History";
import ProcessSection from "./ProcessSection";

function About() {
  return (
    <>
      <div className="flex bg-[#f7f7f7]  pb-16">
        <div className="flex flex-1 flex-col  ml-24 pt-16   ">
          <span className="leading-10  mt-20">
            <span className="text-5xl font-bold ">
              Elevating Businesses and Startups to New Heights.
            </span>
          </span>
          <span className="text-sm leading-6 mt-5 tracking-wide">
            Unleash your full potential with Six36Labs, your trusted partner for
            IT-enabled and IT-driven businesses.
          </span>
        </div>
        <div className="flex flex-1 items-center justify-center  pt-20 ">
          <img
            src={about}
            alt="about"
            className="w-[70%] h-[55%] transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      <div className="mb-8">
        <Experiecnce />
      </div>
      <AboutSection />
      <Locations />
      <History />
      <h2 className="text-3xl mt-8 ml-24 font-bold mb-6">Our Process</h2>
      <ProcessSection />
    </>
  );
}

export default About;
