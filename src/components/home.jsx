import React from "react";
import "../App.css";
import { Link, Route, Routes} from "react-router-dom";
import { useAuth  } from "../components/auth/usecontext"


import { Shoping } from "./Todo/shoping";


export const Home = () => {
  
   //dashord
  
  return (
    <>
      
      <div className="row">
        <Shoping/>
  
      </div>
    </>
  );
};
