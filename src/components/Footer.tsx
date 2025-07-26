import { colors } from './Color';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import logo from "../assets/images/logo.png";
// Assuming About, Services, Feedback, Contact are actual components
// If these are not components but just labels, you'd use strings like 'About Us', 'Our Services', etc.
// For the purpose of the footer links, we typically just display text.
// If you want to link to actual sections within the same page, the href is correct.

const Footer = () => {
  // Corrected structure for footerLinks: an array of objects,
  // where 'text' is the string to display and 'href' is the link target.
  const footerLinks = [
    { text: 'About Us', href: '#about' }, // Changed from About to 'About Us'
    { text: 'Services', href: '#services' }, // Changed from Services to 'Services'
    { text: 'Feedback', href: '#feedback' }, // Changed from Feedback to 'Feedback'
    { text: 'Contact Us', href: '#contact' } // Changed from Contact to 'Contact Us'
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#' },
    { icon: <Twitter size={20} />, href: '#' },
    { icon: <Instagram size={20} />, href: '#' },
    { icon: <Linkedin size={20} />, href: '#' }
  ];

  return (
    <footer className="py-5" style={{ backgroundColor: colors.dark }}>
      <div className="container">
        <div className="row g-4">
          {/* Brand Section */}
          <div className="col-lg-4 mb-4">
            <div className="d-flex align-items-center mb-4">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center me-3"
                style={{
                  width: '50px',
                  height: '50px',
                  background: `linear-gradient(135deg, ${colors.white}, ${colors.white})`,
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold',
                }}
              >
                <img
                  src={logo}
                  alt="logo"
                  height="90px"
                  width="90px"
                  style={{
                    marginTop: "-20px"
                  }}
                />
              </div>
              <span className="fw-bold fs-4 text-white">Zarexa</span>
            </div>
            <p className="mb-4" style={{ color: colors.mutedGray, lineHeight: '1.6' }}>
              Empowering businesses with cutting-edge digital marketing solutions.
              Join thousands of companies that trust Zarexa to grow their online presence.
            </p>
            <div className="d-flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: '45px',
                    height: '45px',
                    backgroundColor: `${colors.primary}20`,
                    color: colors.primary,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget as HTMLAnchorElement;
                    target.style.backgroundColor = colors.primary;
                    target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget as HTMLAnchorElement;
                    target.style.backgroundColor = `${colors.primary}20`;
                    target.style.color = colors.primary;
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Section - Corrected Mapping */}
          {/* Instead of Object.entries, we directly map the footerLinks array */}
          {/* It seems you intended to have one column for all the footer links under a single heading,
              or perhaps multiple columns with different categories.
              Given your original `footerLinks` structure, it implies a single list of links.
              If you want multiple categories, you'd structure `footerLinks` differently (e.g., an array of objects, each object being a category with its own links).
              For now, I'm putting all `footerLinks` under a single "Quick Links" heading. */}
          <div className="col-lg-2 col-md-3 col-sm-6 offset-lg-1"> {/* Added offset for better spacing */}
            <h6 className="fw-bold text-white mb-3">Quick Links</h6> {/* Static heading */}
            <ul className="list-unstyled">
              {footerLinks.map((link, index) => ( // Correctly mapping the array
                <li key={index} className="mb-2"> {/* Using index as key, or better, add an id to your link objects */}
                  <a
                    href={link.href} // Use link.href
                    className="text-decoration-none"
                    style={{
                      color: colors.mutedGray,
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      const target = e.currentTarget as HTMLAnchorElement;
                      target.style.color = colors.primary;
                    }}
                    onMouseLeave={(e) => {
                      const target = e.currentTarget as HTMLAnchorElement;
                      target.style.color = colors.mutedGray;
                    }}
                  >
                    {link.text} {/* Use link.text */}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* You can add more columns here if you have other categories of links */}

        </div>


        {/* Bottom Section */}
        <div className="row mt-5 pt-4" style={{ borderTop: `1px solid ${colors.gray}30` }}>
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0" style={{ color: colors.mutedGray }}>
              © 2025 Zarexa. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0" style={{ color: colors.mutedGray }}>
              Made with ❤️ for growing businesses
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;