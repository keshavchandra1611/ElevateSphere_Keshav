import { Menu, X } from "lucide-react";
import { useState } from "react";
import img from "../../assets/RandImg.jpg";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={img} alt="logo" />
            <span className="text-xl tracking-tight">ElevateSphere</span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            <Link to="/"><li>HOME</li></Link>
            <Link to="/"><li>Product</li></Link>
            <Link to="/customer"><li>Customers</li></Link>
            <Link to="pricingpage"><li>Pricing</li></Link>
            <Link to="/resources"><li>Resources</li></Link>
          </ul>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              GET STARTED
            </a>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button className="text-2xl" onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
            <Link to="/"><li>HOME</li></Link>
            <Link to="/"><li>Use Cases</li></Link>
            <Link to="/customer"><li>Customers</li></Link>
            <Link to="pricingpage"><li>Pricing</li></Link>
            <Link to="/resources"><li>Resources</li></Link>
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                GET STARTED
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
