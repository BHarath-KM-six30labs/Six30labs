import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="w-full ">
      {/* <div className="flex items-center  justify-center h-full ">
        footer
      </div> */}
      <div
        className="bg-gray-100
       flex flex-col gap-2 items-center md:flex-row justify-between  p-5 pmd:px-32 md:px-20 px-5 "
      >
        <span className="text-sm">
          All rights reserved | © 2024 Six30 Labs Pvt. Ltd.
        </span>
        <span className=" text-sm flex gap-3 items-center">
          Follow us on
          <span className="flex gap-3 cursor-pointer">
            <a href="https://www.instagram.com/six30labs/" target="_blank">
              <FaInstagram color="#03B7C9" size={22} />
            </a>
            <a href="https://www.facebook.com/six30labs" target="_blank">
              <FaFacebook color="#03B7C9" size={22} />
            </a>
            <a href="https://twitter.com/six_30L" target="_blank">
              <FaXTwitter color="#03B7C9" size={22} />
            </a>
            <a
              href="https://www.linkedin.com/company/six-30-labs"
              target="_blank"
            >
              <FaLinkedin color="#03B7C9" size={22} />
            </a>
          </span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
