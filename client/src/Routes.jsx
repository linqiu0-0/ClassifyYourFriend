import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Summary from "./pages/summary";



const ProjectRoutes = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/summary" element={<Summary/>} />
            </Routes>
        </Router>
    );
};
export default ProjectRoutes;