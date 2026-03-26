import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");
  const cartCount = 2; // This can be replaced with your actual cart context

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    setIsOpen(false);
  };

  // Static Styles (Classic Light Theme)
  const navBg = scrolled 
    ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100" 
    : "bg-white";

  const linkStyle = `text-[12px] font-medium uppercase tracking-[0.2em] transition-all duration-300 relative py-1 text-gray-600 hover:text-black after:content-[''] after:absolute after:w-0 after:h-[1px] after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300 after:bg-black`;

  return (
    <nav className={`fixed w-full top-0 z-[100] transition-all duration-500 ease-in-out py-4 px-6 md:px-12 ${navBg}`}>
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        
        {/* LEFT: LOGO */}
        <Link to="/" className="flex items-center gap-4 group">
          <img 
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fashion-logo%2Cclothing-store-logo%2Cbrand-logo-design-template-a8a8172b2c1031a900b3b831c7eaf2e3_screen.jpg?ts=1704225632" 
            alt="Logo" 
            className="h-9 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500" 
          />
          <h1 className="hidden sm:block text-[15px] font-light tracking-[0.4em] uppercase text-black">
            Fashion <span className="font-bold">Hub</span>
          </h1>
        </Link>

        {/* CENTER/RIGHT: DESKTOP */}
        <div className="hidden md:flex items-center space-x-10">
          <nav className="flex items-center space-x-8">
            <Link to="/" className={linkStyle}>Home</Link>
            {token && (
              <>
                <Link to="/product" className={linkStyle}>Collections</Link>
                <Link to="/aboutpage" className={linkStyle}>Our Story</Link>
              </>
            )}
          </nav>
          
          <div className="flex items-center space-x-6 border-l border-gray-200 pl-10">
            {token ? (
              <>
                <Link to="/cart" className="relative transition-transform hover:scale-110 text-gray-600 hover:text-black">
                  <TfiShoppingCartFull size={21} />
                  {/* {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 bg-black text-white ring-white">
                      {cartCount}
                    </span>
                  )} */}
                </Link>
                <button 
                  onClick={handleLogout}
                  className="px-7 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all active:scale-95 shadow-sm bg-black text-white hover:bg-gray-800"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="text-[11px] font-bold uppercase tracking-[0.2em] px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition-all duration-300">
                Sign In
              </Link>
            )}
          </div>
        </div>

        {/* MOBILE: HAMBURGER */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {isOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 top-[70px] z-[99] transition-all duration-500 ease-in-out md:hidden ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} bg-white text-black`}>
        <div className="flex flex-col items-center pt-16 space-y-8 h-full px-10">
          <Link to="/" className="text-xl font-light tracking-[0.3em] uppercase">Home</Link>
          {token ? (
            <>
              <Link to="/product" className="text-xl font-light tracking-[0.3em] uppercase">Collections</Link>
              <Link to="/aboutpage" className="text-xl font-light tracking-[0.3em] uppercase">Our Story</Link>
              <Link to="/cart" className="flex items-center gap-4 border-y w-full justify-center py-6 border-gray-100">
                <TfiShoppingCartFull size={24}/>
                <span className="text-xs uppercase tracking-widest">Cart ({cartCount})</span>
              </Link>
              <button onClick={handleLogout} className="w-full py-4 text-xs font-bold uppercase tracking-[0.3em] bg-black text-white">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="w-full border border-black py-4 text-xs font-bold text-center uppercase tracking-[0.3em]">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;