import {createBrowserRouter} from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ExpandableComponent from "../Pages/ExpandableComponent";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        }
      ]
    },
   
  ]);