import about from "../../assets/About/about_Empo_2e8775b503.png";
import Locations from "../../components/Locations/Locations";
import Experiecnce from "../Home/Sections/Experiecnce";

import {
  AboutSection,
  Approach,
  History,
  ProcessSection,
} from "./Sections/index";

import { motion } from "framer-motion";

function About() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <div className="mmd:flex flex-wrap bg-[#f7f7f7]  pb-16">
          <div className="flex flex-1 flex-col  pmd:ml-32 sm:ml-20 mx-5  ">
            <span className=" mt-14 ">
              <span className=" mmd:text-[4.3rem] sm:text-6xl text-5xl font-bold  ">
                Elevating Businesses and Startups to New Heights.
              </span>
            </span>
            <span className=" text-xl text-gray-500 leading-8  mt-10 tracking-wide">
              Unleash your full potential with Six36Labs, your trusted partner
              for IT-enabled and IT-driven businesses.
            </span>
          </div>

          <div className="flex flex-1 items-center justify-center mt-10 mmd:mt-0 ">
            <img
              src={about}
              alt="about"
              className="transform transition-transform duration-300 hover:scale-105 mmd:w-[26rem] mmd:h-[16rem] md:w-[26rem] md:h-[16rem] w-[20rem] h-[12rem]"
            />
          </div>
        </div>
      </motion.div>
      <div className="mb-8">
        <Experiecnce />
      </div>
      <AboutSection />
      <Locations />
      <History />
      <h2 className="text-3xl mt-8 mmd:ml-32 md:ml-20 ml-5 font-bold mb-6 md:mb-10 ">
        Our Process
      </h2>
      <ProcessSection />
      <Approach />
    </>
  );
}

export default About;
