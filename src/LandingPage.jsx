import Navbar from "./components/LandingPage/Navbar";
import HeroSection from "./components/LandingPage/HeroSection";
import FeaturesSection from "./components/LandingPage/FeaturesSection";
import Benefits from "./components/LandingPage/Benefits";
import OurTeam from "./components/LandingPage/OurTeam";
import Footer from "./components/LandingPage/Footer"

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Benefits />
      <OurTeam />
      <Footer />
    </>
  )
}

export default LandingPage
