import Locations from "../../components/Locations/Locations";
import map from "../../assets/contacts/map.png";
import contact from "../../assets/Services/others/contact_14fde04a5f.png";
import mail from "../../assets/contacts/mail.png";

import { GoQuestion } from "react-icons/go";
import { LuMailPlus } from "react-icons/lu";
import ContactForm from "./sections/ContactForm";

function Contacts() {
  return (
    <>
      <div className="flex ml-32 mt-24 items-center">
        <div className="flex-1">
          <h1 className="text-7xl font-bold">SAY HELLO</h1>
          <p className="mt-3 leading-7 text-gray-700 tracking-wider">
            Interested in partnering with us? We are easy to reach. Send a
            message to{" "}
            <a
              href="mailto:hello@six30labs.io"
              target="_blank"
              className="font-semibold text-[#41B98C]"
            >
              hello@six30labs.io
            </a>{" "}
            and you will be contacted within one business day.
          </p>
        </div>
        <div className="flex-1">
          <img
            src={contact}
            alt="image"
            className="ml-32 h-[32rem] transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      <div
        className="flex justify-center items-center flex-col mt-14"
        style={{ backgroundImage: `url(${map})` }}
      >
        <Locations />
      </div>

      <div className="text-center mt-10">
        <h3 className="text-4xl text-center  py-3">
          We can help your business make a difference.
        </h3>
        <p className="leading-7 text-gray-700 tracking-wider">
          Give us a few details and we’ll get back to you soon.
        </p>
      </div>
      <div className="mt-10">
        <div className="flex flex-col md:flex-row justify-center items-center md:px-64 ">
          <div className="flex flex-col justify-center items-center flex-1 ">
            <GoQuestion size={40} color="#41B98C" />
            <h3 className="text-lg md:text-xl font-semibold mt-2">
              GENERAL ENQUIRIES
            </h3>
            <a
              href="mailto:hello@six30labs.io"
              target="_blank"
              className="mt-2 text-[#41B98C] hover:underline tracking-wider"
            >
              hello@six30labs.io
            </a>
          </div>
          <div className="flex flex-col justify-center items-center flex-1 p-4">
            <LuMailPlus size={40} color="#41B98C" />
            <h3 className="text-lg md:text-xl font-semibold mt-2">SUPPORT</h3>
            <a
              href="mailto:support@six30labs.io"
              target="_blank"
              className="mt-2 text-[#41B98C] hover:underline tracking-wider"
            >
              support@six30labs.io
            </a>
          </div>
        </div>
        <div className=" bg-[#f7f7f7] mt-8 mx-4 sm:mx-8 md:mx-16 lg:mx-32 p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center">
            <div className="flex flex-1 flex-col items-center text-center space-y-4 sm:items-start sm:text-left sm:space-y-6 lg:max-w-md lg:mx-auto">
              <img
                src={mail}
                alt="Contact"
                className="w-auto h-auto sm:w-auto sm:h-auto"
              />
              <h2 className="text-2xl font-semibold">Get in Touch</h2>
              <p className="text-gray-700">
                We are easy to reach. Send a message to
              </p>
              <a
                href="mailto:support@six30labs.io"
                target="_blank"
                className="bg-[#41B98C] tracking-wider text-white px-4 py-2 rounded text-xl hover:bg-[#36a77c] transition duration-300"
              >
                hello@six30labs.io
              </a>
              <p className="text-gray-600 leading-7">
                You can also reach out to us using the form on the right side.
                Please make sure the email address you enter is correct.
              </p>
            </div>

            <div className="flex-1 mt-6 sm:mt-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
