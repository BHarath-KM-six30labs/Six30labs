import { Outlet } from "react-router-dom"
import PortfolioHeader from "../components/Header/PortfolioHeader/PortfolioHeader"


function PortfolioLayout() {
  return (
    <div>
        <PortfolioHeader/>
        <Outlet/>
    </div>
  )
}

export default PortfolioLayout