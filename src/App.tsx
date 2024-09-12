import { useState } from 'react'
import './App.css'
import Layout from './Layout/Layout'
import Home from './pages/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About/About'
import Service from './pages/Services/Service'
import Careers from './pages/Careers/Careers'
import Contacts from './pages/Contacts/Contacts'


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
      }
    ],
  },
]);
function App() {
  const [count, setCount] = useState(0)



  return (
    <>
    
      {/* <Layout/> */}
      <RouterProvider router={router} />

       
    </>
  )
}

export default App
