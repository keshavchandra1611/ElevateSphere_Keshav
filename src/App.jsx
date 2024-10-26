import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Benefits from "./components/LandingPage/Benefits.jsx";
import FeaturesSection from "./components/LandingPage/FeaturesSection.jsx";
import HeroSection from "./components/LandingPage/HeroSection.jsx";
import OurTeam from "./components/LandingPage/OurTeam.jsx";
import HeroSectionP from "./components/ProductPage/HeroSection.jsx";
import ProductDetails from "./components/ProductPage/ProductDetails.jsx";
import ProductSection from "./components/ProductPage/ProductSection.jsx";
import LandingPage from "./LandingPage.jsx";
import ProductPage from "./ProductPage.jsx";
import BlogPage from "./components/pages/BlogPages.jsx";
import IdeaRanking from "./components/pages/IdeaRanking.jsx";
import PricingPage from "./components/pages/PricingPage.jsx";
import Customer from "./components/pages/Customer.jsx";

export default function App() {
  var exacts = true;
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ProductPage />} exact={`${exacts}`} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/featuressection" element={<FeaturesSection />} />
          <Route path="/herosectionlanding" element={<HeroSection />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/herosectionproduct" element={<HeroSectionP />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/productsection" element={<ProductSection />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/resources" element={<BlogPage />} />
          <Route path="/idearanking" element={<IdeaRanking />} />
          <Route path="/pricingpage" element={<PricingPage />} />
          <Route path="/customer" element={<Customer />} />
        </Routes>
      </Router>
    </div>
  )
}