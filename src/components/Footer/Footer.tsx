import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="fixed bottom-0 w-full">
      <div className="flex items-center bg-black opacity-90 justify-center h-full text-white">
        footer
      </div>
      <div
        className="bg-black
      flex items-center justify-between  p-5 px-32 text-white"
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
