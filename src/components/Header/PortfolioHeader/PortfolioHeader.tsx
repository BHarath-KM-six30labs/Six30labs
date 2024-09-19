import { Link, useLocation } from "react-router-dom";
import "../header.css";

function PortfolioHeader() {
  const location = useLocation(); 

  return (
    <ul className="flex gap-10 items-center text-sm text-gray-800 cursor-pointer pmd:ml-32 md:ml-20 mt-16 relative">
      <Link to="/portfolio">
        <li className={`uppercase relative underline-animation ${location.pathname === '/portfolio' ? 'active' : ''}`}>
          Platforms
        </li>
      </Link>
      <Link to="accelerators">
        <li className={`uppercase relative underline-animation ${location.pathname === '/portfolio/accelerators' ? 'active' : ''}`}>
          ACCELERATORS
        </li>
      </Link>
      <Link to="portfolio-others">
        <li className={`uppercase relative underline-animation ${location.pathname === '/portfolio/portfolio-others' ? 'active' : ''}`}>
          Others
        </li>
      </Link>
    </ul>
  );
}

export default PortfolioHeader;
