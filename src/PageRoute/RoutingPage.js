import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SignUp from "../Pages/SignUp/SignUp";

export default function RoutingPage(){
    return(
     <BrowserRouter>
     <Routes>
        {/* <Route path="/" element={<Dashboard/>}/> */}
        <Route path="/" element={<SignUp/>}/>
     </Routes>
     </BrowserRouter>
    )
}