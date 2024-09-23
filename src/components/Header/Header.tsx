import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { useState, useRef, useEffect } from "react";
import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { motion } from "framer-motion";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const timeoutRef = useRef<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  console.log(isDropdownOpen);
  const handleClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };
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
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`flex justify-between items-center pmd:px-32 px-5 py-2 md:px-20  ${
          isSticky ? "sticky top-0 bg-white z-10" : ""
        }`}
      >
        <div className="flex sm:flex-1 items-center mmd:gap-5 md:gap-5 gap-2 relative ">
          <img
            src={logo}
            alt="six30labs-Logo"
            className="mmd:w-[60px] md:w-[60px] w-[50px]"
          />
          <span className="flex flex-col">
            <span className="text-[#41B98C] font-bold mmd:text-[20px] md:text-[20px] text-[17px]">
              SIX30 LABS
            </span>
            <span className="text-[#03B7C9] text-[12px]">
              CODE. EAT. REPEAT.
            </span>
          </span>
        </div>
        <div className={` flex-1 ${window.innerWidth < 800 ? "z-50" : ""}`}>
          

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: isMobileMenuOpen || window.innerWidth > 768 ? 1 : 0,
              y: isMobileMenuOpen ? 0 : 0,
            }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <ul
              className={`${
                isMobileMenuOpen
                  ? "flex flex-col absolute mt-3  top-[3rem] p-5  left-1/2 transform -translate-x-1/2 bg-white w-full "
                  : "mmd:flex md:flex hidden"
              } flex justify-between gap-2  md:items-center mmd:items-center pl-10  md:text-sm mmd:text-sm text-[11px] text-gray-800 cursor-pointer  `}
            >
              <Link to="/">
                <li
                  className={`relative uppercase underline-animation ${
                    location.pathname === "/" ? "active" : ""
                  } ${isMobileMenuOpen ? "w-0" : ""}`}
                >
                  home
                </li>
              </Link>
              <Link to="/about">
                <li
                  className={`relative uppercase cursor-pointer  underline-animation ${
                    location.pathname === "/about" ? "active" : ""
                  } ${isMobileMenuOpen ? "w-0" : ""}`}
                >
                  about
                </li>
              </Link>
              <div className="relative z-50 ">
                <li
                  className={`relative uppercase cursor-pointer  underline-animation ${
                    location.pathname === "/services" ||
                    location.pathname === "/software_development" ||
                    location.pathname === "/design&development" ||
                    location.pathname === "/others" ||
                    location.pathname === "/digital_marketing"
                      ? "active"
                      : ""
                  } ${isMobileMenuOpen ? "w-0" : ""}`}
                  // onMouseEnter={handleMouseEnter}
                  // onMouseLeave={handleMouseLeave}
                  onMouseEnter={
                    window.innerWidth > 768 ? handleMouseEnter : undefined
                  } // Replace 768 with your desired breakpoint
                  onMouseLeave={
                    window.innerWidth > 768 ? handleMouseLeave : undefined
                  }
                >
                  <Link to="/services"> services</Link>
                  {
                    // (location.pathname === "/services" ||
                    //   location.pathname === "/software_development" ||
                    //   location.pathname === "/design&development" ||
                    //   location.pathname === "/others" ||
                    //   location.pathname === "/digital_marketing") &&
                    <>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{
                            opacity:
                              isMobileMenuOpen || window.innerWidth > 768
                                ? 1
                                : 0,
                            y: isMobileMenuOpen ? 0 : 0,
                          }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.5 }}
                        >
                          <ul
                            className={` mmd:absolute md:absolute mt-1  z-20 left-0 md:mt-2 mmd:mt-2 w-48 bg-white md:border mmd:border font-normal md:border-gray-200 md:rounded md:shadow-lg mmd:border-gray-200 mmd:rounded mmd:shadow-lg`}
                            // onMouseEnter={handleMouseEnter}
                            // onMouseLeave={handleMouseLeave}
                          >
                            <Link to="/software_development">
                              <li
                                className={`block px-4 md:py-2 mmd:py-2 py-[5px] text-gray-800 hover:bg-gray-100 md:text-[12px] mmd:text-[12px] text-[11px] ${
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
                                className={`block px-4  md:py-2 mmd:py-2 py-[5px] text-gray-800 hover:bg-gray-100 md:text-[12px] mmd:text-[12px] text-[11px] ${
                                  location.pathname === "/design&development"
                                    ? "active"
                                    : ""
                                }`}
                              >
                                Design &amp; Development
                              </li>
                            </Link>
                            <a href="https://bloomlabs.in/" target="_blank">
                              <li className="block px-4  md:py-2 mmd:py-2 py-[5px] text-gray-800 hover:bg-gray-100 md:text-[12px] mmd:text-[12px] text-[11px]">
                                Training &amp; Development
                              </li>
                            </a>
                            <Link to="/digital_marketing">
                              <li
                                className={`block px-4  md:py-2 mmd:py-2 py-[5px] text-gray-800 hover:bg-gray-100 md:text-[12px] mmd:text-[12px] text-[11px] ${
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
                                className={`block px-4  md:py-2 mmd:py-2 py-[5px] text-gray-800 hover:bg-gray-100 md:text-[12px] mmd:text-[12px] text-[11px] ${
                                  location.pathname === "/others"
                                    ? "active"
                                    : ""
                                }`}
                              >
                                Others
                              </li>
                            </Link>
                          </ul>
                        </motion.div>
                      )}
                    </>
                  }
                </li>
                <button
                  onClick={handleClick}
                  className="mmd:hidden md:hidden block absolute top-0 right-0"
                >
                  {isDropdownOpen ? (
                    <FaCaretUp color="#41B98C" size={20} />
                  ) : (
                    <FaCaretDown color="#41B98C" size={20} />
                  )}
                </button>
              </div>
              {/* <Link to="/careers">
            <li className="uppercase">careers</li>
          </Link> */}
              <Link to="/portfolio">
                <li
                  className={`relative uppercase cursor-pointer  underline-animation ${
                    location.pathname === "/portfolio" ||
                    location.pathname === "/portfolio/accelerators" ||
                    location.pathname === "/portfolio/portfolio-others"
                      ? "active"
                      : ""
                  } ${isMobileMenuOpen ? "w-0" : ""}`}
                >
                  portfolio
                </li>
              </Link>
              <Link to="/contact">
                <li
                  className={`relative uppercase cursor-pointer  underline-animation ${
                    location.pathname === "/contact" ? "active" : ""
                  } ${isMobileMenuOpen ? "w-0" : ""}`}
                >
                  contact
                </li>
              </Link>
            </ul>
          </motion.div>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-gray-800">
            {isMobileMenuOpen ? (
              <IoMdClose color="#41B98C" size={25} />
            ) : (
              <GiHamburgerMenu size={25} color="#41B98C" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
