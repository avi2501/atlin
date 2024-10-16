import React from "react";
import Header from "./components/component/Header";
import About from "./components/navbar/About";
import Home from "./components/navbar/Home";
import Service from "./components/navbar/Service";
import Contact from "./components/navbar/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/component/Footer";

const App = () => {
  const navigat = createBrowserRouter([

// this is the vanigation bas link of header files 
    {
      path: "/atlin",
      element: <><Header /><Home/></>
    }, 
    {
      path: "/",
      element: <><Header /><Home /></>
    },
    {
      path: "/About",
      element: <><Header /><About /></>
    },
    {
      path: "/Service",
      element: <><Header /><Service/></>
    },
    {
      path: "/Contact",
      element: <><Header /><Contact /></>
    },


// this si service page links

    {
      path: "/Service/web_development/contactUs",
      element: <><Header /><Contact /></>
    },
    {
      path: "/Service/Branding/contactUs",
      element: <><Header /><Contact /></>
    },
    {
      path: "/Service/web_development/contactUs",
      element: <><Header /><Contact /></>
    },
    {
      path: "/Service/AboutUs/contactUs",
      element: <><Header /><Contact /></>
    },
    {
      path: "/Home/Services/contactUs",
      element: <><Header /><Contact /></>
    },
    {
      path: "/Home/Services",
      element: <><Header /><Service /></>
    }

  ]);
  return (
    <> 
      
      <RouterProvider router={navigat} />
      <Footer/>
    </>
  )
};
export default App;
