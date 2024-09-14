import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
function Header() {
  return (
    <>
      <div className="flex justify-between px-24 py-2 ">
        <div className="flex items-center gap-3">
          <img src={logo} alt="six30labs-Logo" className="w-[60px]" />
          <span className="flex flex-col ">
            <span className="text-[#41B98C] font-bold text-[16px]">SIX30 LABS</span>
            <span className="text-[#03B7C9] text-[12px]">CODE. EAT. REPEAT.</span>
          </span>
        </div>
        <ul className="flex gap-10 items-center text-[11px] text-gray-800 cursor-pointer">
          <Link to="/">
            <li className="uppercase">home</li>
          </Link>
          <Link to={"/about"}>
            <li className="uppercase">about</li>
          </Link>
          <Link to={"/services"}>
            <li className="uppercase">services</li>
          </Link>
          <Link to={"/careers"}>
            <li className="uppercase">careers</li>
          </Link>
          <Link to={"/contact"}>
            <li className="uppercase">contact</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Header;
