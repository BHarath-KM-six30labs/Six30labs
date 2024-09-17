import { Link } from "react-router-dom"


function PortfolioLayout() {
  return (
    <>
    <ul className="flex gap-10 items-center text-sm text-gray-800 cursor-pointer">
          <Link to="/portfolio">
            <li className="uppercase">Portfolio</li>
          </Link>
          <Link to="/accelerators">
            <li className="uppercase">ACCELERATORS</li>
          </Link>
          <Link to="/portfolio-others">
            <li className="uppercase">Others</li>
          </Link>
        </ul>
    </>
  )
}

export default PortfolioLayout