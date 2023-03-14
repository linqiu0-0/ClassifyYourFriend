import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Summary from "./pages/summary";



const ProjectRoutes = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/summary" element={<Summary/>} />
            </Routes>
        </BrowserRouter>
    );
};
export default ProjectRoutes;