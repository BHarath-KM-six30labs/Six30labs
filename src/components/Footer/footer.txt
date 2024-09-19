import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="w-full">
      {/* <div className="flex items-center  justify-center h-full ">
        footer
      </div> */}
      <div
        className="bg-gray-100
      flex items-center justify-between  p-5 px-32 "
      >
        <span className="text-sm">
          All rights reserved | © 2024 Six30 Labs Pvt. Ltd.
        </span>
        <span className=" text-sm flex gap-3 items-center">
          Follow us on
          <span className="flex gap-3 cursor-pointer">
            <FaInstagram color="#03B7C9" size={25} />
            <FaFacebook color="#03B7C9" size={25} />
            <FaXTwitter color="#03B7C9" size={25} />
            <FaLinkedin color="#03B7C9" size={25} />
          </span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
