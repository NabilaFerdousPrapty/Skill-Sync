import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../Pages/Home/Home";

import About from "../Pages/About/About";
import MainLayout from "../Layouts/MainLayout";
import Contact from "../Pages/Contact/Contact";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
export  const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path: "/",
                element: <Home/>,
          
              },
              {
                  path:'/contact',
                  element:<Contact/>
              },
              {
                 path:'/about',
                 element:<About/>
              },{
                path:'/login',
                element:<Login/>
              },{
                path:'/signup',
                element:<SignUp/>
              }
        ]
    }
  ]);