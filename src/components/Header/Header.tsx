import { Link } from "react-router-dom";
import logo from "../../assets/image.png";
function Header() {
  return (
    <>
      <div className="flex justify-between px-[150px] py-2 border">
        <div className="flex items-center gap-3">
          <img src={logo} alt="six30labs-Logo" className="w-[60px]" />
          <span className="flex flex-col ">
            <span className="text-[#41B98C] font-bold text-xl">SIX30 LABS</span>
            <span className="text-[#03B7C9] text-sm">CODE. EAT. REPEAT.</span>
          </span>
        </div>
        <ul className="flex gap-16 items-center text-sm text-gray-800 cursor-pointer">
          <Link to="/">
            <li>HOME</li>
          </Link>
          <Link to={"/about"}>
            <li>ABOUT</li>
          </Link>
          <Link to={"/services"}>
            <li>SERVICES</li>
          </Link>
          <Link to={"/careers"}>
            <li>CAREERS</li>
          </Link>
          <Link to={"/contact"}>
            <li>CONTACT</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Header;
