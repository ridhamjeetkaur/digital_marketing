import { colors } from './Color';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

// Footer Component
const Footer = () => {
  const footerLinks = {
    'Product': ['Features', 'Pricing', 'Integrations', 'API'],
    'Company': ['About', 'Blog', 'Careers', 'Press'],
    'Support': ['Help Center', 'Contact', 'Status', 'Updates'],
    'Legal': ['Privacy', 'Terms', 'Security', 'Cookies']
  };

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
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold'
                }}
              >
                Z
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

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={index} className="col-lg-2 col-md-3 col-sm-6">
              <h6 className="fw-bold text-white mb-3">{category}</h6>
              <ul className="list-unstyled">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <a 
                      href="#"
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
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="row mt-5 pt-4" style={{ borderTop: `1px solid ${colors.gray}30` }}>
          <div className="col-lg-6 mb-4">
            <h6 className="fw-bold text-white mb-3">Stay Updated</h6>
            <p style={{ color: colors.mutedGray }}>
              Get the latest marketing tips, product updates, and exclusive offers.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="d-flex gap-2">
              <input 
                type="email" 
                className="form-control form-control-lg rounded-pill"
                placeholder="Enter your email"
                style={{ 
                  backgroundColor: `${colors.gray}20`,
                  border: 'none',
                  color: 'white'
                }}
              />
              <button 
                className="btn text-white px-4 rounded-pill fw-medium"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  border: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
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