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
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>CAREERS</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </>
  );
}

export default Header;
