import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import LandingPage from "../pages/LandingPage";
import Authentication from "../pages/authentication";
import AuthProvider from "../context/AuthContext";
import VedeoMeetComponent from "../pages/VideoMeetComponent";

function AppRoutes() {
  return (
    <Router>
      <AuthProvider>
      
    
      <Routes>

        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/auth" element={<Authentication/>}/>
          <Route path="/:url" element={<VedeoMeetComponent/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/product" element={<Products/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>

      </Routes>
        </AuthProvider>
    </Router>
  );
}

export default AppRoutes;
