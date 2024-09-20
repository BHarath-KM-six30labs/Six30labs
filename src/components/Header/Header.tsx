import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { useState, useRef, useEffect } from "react";
import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

interface MobileMenuItemProps {
  to: string; // or whatever type 'to' should be
  children: React.ReactNode;
  active: boolean;
}

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const timeoutRef = useRef<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const showSubmenu = () => {
    setShowSubMenu((pre) => !pre);
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
    <div
      className={`flex justify-between items-center pmd:px-32 px-5 py-2 sm:px-20  ${
        isSticky ? "sticky top-0 bg-white z-10" : ""
      }`}
    >
      <div className="flex flex-1 items-center mmd:gap-5 md:gap-5 gap-2 ">
        <img
          src={logo}
          alt="six30labs-Logo"
          className="mmd:w-[60px] md:w-[60px] w-[50px]"
        />
        <span className="flex flex-col">
          <span className="text-[#41B98C] font-bold mmd:text-[20px] md:text-[20px] text-[17px]">
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
                    <a href="https://bloomlabs.in/" target="_blank">
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
            <li
              className={`relative uppercase cursor-pointer  underline-animation ${
                location.pathname === "/portfolio" ||
                location.pathname === "/portfolio/accelerators" ||
                location.pathname === "/portfolio/portfolio-others"
                  ? "active"
                  : ""
              }`}
            >
              portfolio
            </li>
          </Link>
          <Link to="/contact">
            <li
              className={`relative uppercase cursor-pointer  underline-animation ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              contact
            </li>
          </Link>
        </ul>
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className={`md:hidden absolute top-14 left-0 w-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out`}
            >
              <ul className="flex flex-col p-5 text-sm text-gray-800 ">
                <MobileMenuItem to="/" active={location.pathname === "/"}>
                  Home
                </MobileMenuItem>
                <MobileMenuItem
                  to="/about"
                  active={location.pathname === "/about"}
                >
                  About
                </MobileMenuItem>
                <MobileMenuItem
                  to="/services"
                  active={location.pathname.includes("/services")}
                >
                  <span className="flex justify-between ">
                    Services{" "}
                    <button className="font-normal" onClick={showSubmenu}>
                      {showSubMenu ? (
                        <FaCaretUp color="#41B98C" size={20} />
                      ) : (
                        <FaCaretDown color="#41B98C" size={20} />
                      )}
                    </button>
                  </span>
                </MobileMenuItem>
                {/* submenu */}
                <AnimatePresence>
                {showSubMenu && (
                    <>
                      <motion.div
                         initial={{ opacity: 0, y: -20 }} 
                         animate={{ opacity: 1, y: 0 }} 
                         exit={{ opacity: 0, y: -20 }} 
                         transition={{ duration: 0.3 }} 
                      >
                        <MobileMenuItem
                          to="/software_development"
                          active={location.pathname.includes(
                            "/software_development"
                          )}
                        >
                          <span className="ml-5">Software Development </span>
                        </MobileMenuItem>
                        <MobileMenuItem
                          to="/design&development"
                          active={location.pathname === "/design&development"}
                        >
                          <span className="ml-5">Design &amp; Development</span>
                        </MobileMenuItem>

                        <a
                          href="https://bloomlabs.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <li className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[11px]">
                            <span className="ml-5">
                              Training &amp; Development
                            </span>
                          </li>
                        </a>

                        <MobileMenuItem
                          to="/digital_marketing"
                          active={location.pathname === "/digital_marketing"}
                        >
                          <span className="ml-5">Digital Marketing</span>
                        </MobileMenuItem>

                        <MobileMenuItem
                          to="/others"
                          active={location.pathname === "/others"}
                        >
                          <span className="ml-5">Others</span>
                        </MobileMenuItem>
                      </motion.div>
                    </>
                )}
                </AnimatePresence>
                <MobileMenuItem
                  to="/portfolio"
                  active={location.pathname === "/portfolio"}
                >
                  Portfolio
                </MobileMenuItem>
                <MobileMenuItem
                  to="/contact"
                  active={location.pathname === "/contact"}
                >
                  Contact
                </MobileMenuItem>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
const MobileMenuItem = ({ to, children, active }: MobileMenuItemProps) => (
  <Link to={to}>
    <li
      className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[11px]  ${
        active ? "active " : ""
      }`}
    >
      {children}
    </li>
  </Link>
);
export default Header;
