import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { useState, useRef } from "react";
import "./header.css";
function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const timeoutRef = useRef<number | null>(null);

  
  const location = useLocation();
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
  };

  return (
    <div className="flex justify-between items-center pmd:px-32 px-5 py-2 sm:px-20">
      <div className="flex flex-1 items-center gap-5 ">
        <img src={logo} alt="six30labs-Logo" className="w-[60px]" />
        <span className="flex flex-col">
          <span className="text-[#41B98C] font-bold text-[20px]">
            SIX30 LABS
          </span>
          <span className="text-[#03B7C9] text-[12px]">CODE. EAT. REPEAT.</span>
        </span>
      </div>
      <div className=" flex-1 md:block hidden  w-full">
        <ul className="flex justify-between gap-2  items-center text-sm text-gray-800 cursor-pointer">
          <Link to="/">
            <li
              className={`relative uppercase underline-animation  ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              home
            </li>
          </Link>
          <Link to="/about">
            <li
              className={`relative uppercase cursor-pointer  underline-animation ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              about
            </li>
          </Link>
          <li
            className={`relative uppercase cursor-pointer  underline-animation ${
              location.pathname === "/services" ||
              location.pathname === "/software_development" ||
              location.pathname === "/design&development" ||
              location.pathname === "/others" ||
              location.pathname === "/digital_marketing"
                ? "active"
                : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/services">
              {" "}
              <span>services</span>
            </Link>
            {(location.pathname === "/services" ||
              location.pathname === "/software_development" ||
              location.pathname === "/design&development" ||
              location.pathname === "/others" ||
              location.pathname === "/digital_marketing") && (
              <>
                {isDropdownOpen && (
                  <ul
                    className="absolute left-0 mt-2 w-48 bg-white border font-normal border-gray-200 rounded shadow-lg"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link to="/software_development">
                      <li
                        // className={`
                        //    `}
                        className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[12px] ${
                          location.pathname === "/software_development"
                            ? "active"
                            : ""
                        }`}
                      >
                        Software Development
                      </li>
                    </Link>
                    <Link to="/design&development">
                      <li
                        className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[12px] ${
                          location.pathname === "/design&development"
                            ? "active"
                            : ""
                        }`}
                      >
                        Design &amp; Development
                      </li>
                    </Link>
                    <a href="https://bloomlabs.in/">
                      <li className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[12px]">
                        Training &amp; Development
                      </li>
                    </a>
                    <Link to="/digital_marketing">
                      <li
                        className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[12px] ${
                          location.pathname === "/digital_marketing"
                            ? "active"
                            : ""
                        }`}
                      >
                        Digital Marketing
                      </li>
                    </Link>
                    <Link to="/others">
                      <li
                        className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[12px] ${
                          location.pathname === "/others" ? "active" : ""
                        }`}
                      >
                        Others
                      </li>
                    </Link>
                  </ul>
                )}
              </>
            )}
          </li>
          {/* <Link to="/careers">
            <li className="uppercase">careers</li>
          </Link> */}
          <Link to="/portfolio">
            <li  className={`relative uppercase cursor-pointer  underline-animation ${
                location.pathname === "/portfolio" ? "active" : ""
              }`}>portfolio</li>
          </Link>
          <Link to="/contact">
            <li  className={`relative uppercase cursor-pointer  underline-animation ${
                location.pathname === "/contact" ? "active" : ""
              }`}>contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
