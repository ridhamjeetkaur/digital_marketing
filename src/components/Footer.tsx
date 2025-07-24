import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 text-center text-md-start">
            <h5 className="navbar-brand-custom mb-3">Zarexa</h5>
            <p className="text-secondary">Your partner in achieving digital marketing excellence.</p>
            <div className="d-flex social-icons mt-4 justify-content-center justify-content-md-start">
              <a href="https://www.facebook.com/" className="social-icon">{BsFacebook({})}</a>
              <a href="https://www.facebook.com/" className="social-icon">{BsTwitter({})}</a>
              <a href="https://www.facebook.com/" className="social-icon">{BsInstagram({})}</a>
              <a href="https://www.facebook.com/" className="social-icon">{BsLinkedin({})}</a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5>Solutions</h5>
            <ul className="nav flex-column">
              <li className="nav-item">Email Marketing</li>
              <li className="nav-item">Marketing Automation</li>
              <li className="nav-item">AI Tools</li>
              <li className="nav-item">Website Builder</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5>Company</h5>
            <ul className="nav flex-column">
              <li className="nav-item"><a href="#about" className="nav-link">About Us</a></li>
              <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5>Contact Us</h5>
            <p className="text-secondary mb-1">Address</p>
            <p className="text-secondary mb-1">Address</p>
            <p className="text-secondary">info@zarexa.com</p>
          </div>
        </div>
        <hr className="my-4 border-secondary-subtle" />
        <div className="text-center text-secondary">
          &copy; {new Date().getFullYear()} Zarexa. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;