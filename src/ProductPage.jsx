import Navbar from "./components/LandingPage/Navbar";
import HeroSection from "./components/ProductPage/HeroSection";
import ProductSection from "./components/ProductPage/ProductSection"
import ProductDetails from "./components/ProductPage/ProductDetails"
import Footer from "./components/LandingPage/Footer";

function ProductPage() {
    return (
      <>
        <Navbar />
        <HeroSection />
        <ProductSection />
        <ProductDetails />
        <Footer />
      </>
    )
}
  
export default ProductPage