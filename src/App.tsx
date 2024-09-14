import './App.css'
import Layout from './Layout/Layout'
import Home from './pages/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About/About'
import Service from './pages/Services/Service'
import Careers from './pages/Careers/Careers'
import Contacts from './pages/Contacts/Contacts'
import DegitalMarketing from './pages/Services/Sections/DegitalMarketing'
import DesignAndDevelopment from './pages/Services/Sections/DesignAndDevelopment'
import SoftwareDevelopMent from './pages/Services/Sections/SoftwareDevelopMent'
import Others from './pages/Services/Sections/Others'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    errorElement:<p>Error</p>,
    children: [
      {
        path: "",
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        // index: true,
        element: <About />,
      },
      {
        path: "services",
        element:<Service/>
      },
      {
        path: "careers",
        element:<Careers/>
      },
      {
        path: "contact",
        element:<Contacts/>
      },
      {
        path: "digital_marketing",
        element:<DegitalMarketing/>
      },
      {
        path: "design&development",
        element:<DesignAndDevelopment/>
      },
      {
        path: "software_development",
        element:<SoftwareDevelopMent/>
      },
      {
        path: "others",
        element:<Others/>
      }
    ],
  },
]);
function App() {
  



  return (
    <>
    
      {/* <Layout/> */}
      <RouterProvider router={router} />

       
    </>
  )
}

export default App
