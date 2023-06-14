import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import HomePage from "./pages/home/component";
import IndividualPage from "../src/pages/individuals/component/index";
import AboutUsPage from "./pages/aboutUs/component";
import BusinessesPage from "./pages/businesses/component";
import CareerPage from "./pages/career/component";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/individuals" element={<IndividualPage />} />
            <Route path="/businesses" element={<BusinessesPage />} />
            <Route path="/aboutUs" element={<AboutUsPage />} />
            <Route path="/careers" element={<CareerPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
