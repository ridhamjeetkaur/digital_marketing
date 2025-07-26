import { useEffect, useState } from "react";
import { colors } from "./Color";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.png"

// Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#feedback', label: 'Feedback' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav 
      className={`fixed-top transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
      style={{ zIndex: 1050 }}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3">
          {/* Logo */}
          <div className="d-flex align-items-center">
              <span
              style={{ marginBottom:'20px',marginLeft:'5px'}}
            > <img src={logo} alt="logo" height="90px" width="90px"/>
             </span>
            <span 
              className="fw-bold fs-4"
              style={{ color: colors.dark, letterSpacing: '-0.5px'}}
            > <h1>Zarexa</h1>
              
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="d-none d-lg-flex align-items-center">
            <ul className="nav me-4">
              {navLinks.map((link, index) => (
                <li key={index} className="nav-item">
                  <a 
                    href={link.href}
                    className="nav-link px-3 py-2 mx-1 rounded-pill transition-all"
                    style={{ 
                      color: colors.gray,
                      fontSize: '14px', // Or '1.2em', 'large', etc
                      fontWeight: '900',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLAnchorElement;
                      target.style.backgroundColor = colors.lightGray;
                      target.style.color = colors.primary;
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLAnchorElement;
                      target.style.backgroundColor = 'transparent';
                      target.style.color = colors.gray;
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="btn d-lg-none p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ border: 'none', backgroundColor: 'transparent' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="d-lg-none pb-4">
            <div className="border-top pt-4">
              {navLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="d-block py-2 px-3 text-decoration-none rounded mb-2"
                  style={{ color: colors.gray }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
             </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Header;