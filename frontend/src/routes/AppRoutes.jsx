import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<Products/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>

      </Routes>
    </Router>
  );
}

export default AppRoutes;
